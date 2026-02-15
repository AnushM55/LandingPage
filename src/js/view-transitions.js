// Lightweight view transitions that keep background static
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
    window.location.href = url;
    return;
  }

  // Fetch the new page
  const newDocument = await fetchPage(url);
  
  // Use View Transitions API - only transition main content
  const transition = document.startViewTransition(() => {
    // Update the main content
    const oldMain = document.querySelector('main');
    const newMain = newDocument.querySelector('main');
    
    if (oldMain && newMain) {
      oldMain.replaceWith(newMain);
    }
    
    // Update title
    document.title = newDocument.title;
    
    // Update canonical link
    const oldCanonical = document.querySelector('link[rel="canonical"]');
    const newCanonical = newDocument.querySelector('link[rel="canonical"]');
    if (oldCanonical && newCanonical) {
      oldCanonical.href = newCanonical.href;
    }
    
    // Re-initialize theme toggle
    window.updateThemeIcon?.();
  });

  await transition.finished;
  
  // Update URL
  window.history.pushState({}, '', url);
  
  // Reinitialize event handlers on new content
  initializeLinks();
}

function initializeLinks() {
  // Intercept internal link clicks
  document.querySelectorAll('a[href^="/"], a[href^="' + window.location.origin + '"]').forEach(link => {
    if (link.dataset.transitionHandled) return;
    
    link.dataset.transitionHandled = 'true';
    
    link.addEventListener('click', (e) => {
      // Skip if opening in new tab or external
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
    initializeLinks();
  }
});

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLinks);
} else {
  initializeLinks();
}
