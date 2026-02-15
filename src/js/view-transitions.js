// View Transitions for smooth navigation without reloading background
function supportsViewTransitions() {
  return 'startViewTransition' in document;
}

async function fetchPage(url) {
  const response = await fetch(url);
  const html = await response.text();
  const parser = new DOMParser();
  return parser.parseFromString(html, 'text/html');
}

async function transitionToPage(url) {
  if (!supportsViewTransitions()) {
    // Fallback: just navigate normally
    window.location.href = url;
    return;
  }

  // Fetch the new page
  const newDocument = await fetchPage(url);
  
  // Use View Transitions API
  const transition = document.startViewTransition(() => {
    // Update the main content
    const oldMain = document.querySelector('main');
    const newMain = newDocument.querySelector('main');
    
    if (oldMain && newMain) {
      oldMain.replaceWith(newMain);
    }
    
    // Update title
    document.title = newDocument.title;
    
    // Update any head elements that might have changed
    const oldCanonical = document.querySelector('link[rel="canonical"]');
    const newCanonical = newDocument.querySelector('link[rel="canonical"]');
    if (oldCanonical && newCanonical) {
      oldCanonical.href = newCanonical.href;
    }
    
    // Re-initialize theme toggle after content replacement
    window.updateThemeIcon?.();
  });

  await transition.finished;
  
  // Update URL in browser
  window.history.pushState({}, '', url);
  
  // Reinitialize Pagefind search if present
  const searchElement = document.querySelector('#search');
  if (searchElement && window.PagefindUI) {
    searchElement.innerHTML = ''; // Clear old instance
    new PagefindUI({
      element: "#search",
      showImages: false,
      excerptLength: 0,
      showEmptyFilters: true,
      showSubResults: false,
      resetStyles: true,
      bundlePath: "/pagefind/",
      baseUrl: "/"
    });
  }
  
  // Reinitialize any event handlers on the new content
  initializeLinks();
}

function initializeLinks() {
  // Intercept all internal link clicks
  document.querySelectorAll('a[href^="/"], a[href^="' + window.location.origin + '"]').forEach(link => {
    // Skip if already handled
    if (link.dataset.transitionHandled) return;
    
    link.dataset.transitionHandled = 'true';
    
    link.addEventListener('click', (e) => {
      // Skip if:
      // - Opening in new tab
      // - External link
      // - Download link
      // - Has target attribute
      if (
        e.ctrlKey || 
        e.metaKey || 
        e.shiftKey || 
        link.target === '_blank' ||
        link.hasAttribute('download') ||
        link.getAttribute('href')?.startsWith('#')
      ) {
        return;
      }
      
      e.preventDefault();
      
      const href = link.getAttribute('href');
      if (href && href !== window.location.pathname) {
        transitionToPage(href);
      }
    });
  });
}

// Handle browser back/forward buttons
window.addEventListener('popstate', async (e) => {
  if (supportsViewTransitions()) {
    const newDocument = await fetchPage(window.location.href);
    
    const transition = document.startViewTransition(() => {
      const oldMain = document.querySelector('main');
      const newMain = newDocument.querySelector('main');
      
      if (oldMain && newMain) {
        oldMain.replaceWith(newMain);
      }
      
      document.title = newDocument.title;
      window.updateThemeIcon?.();
    });
    
    await transition.finished;
    
    // Reinitialize Pagefind search if present
    const searchElement = document.querySelector('#search');
    if (searchElement && window.PagefindUI) {
      searchElement.innerHTML = '';
      new PagefindUI({
        element: "#search",
        showImages: false,
        excerptLength: 0,
        showEmptyFilters: true,
        showSubResults: false,
        resetStyles: true,
        bundlePath: "/pagefind/",
        baseUrl: "/"
      });
    }
    
    initializeLinks();
  }
});

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLinks);
} else {
  initializeLinks();
}
