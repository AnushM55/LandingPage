// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const toggle = document.querySelector('input[name=light-mode]');
    const checkboxDescription = document.getElementById('checkbox-description');

    if (toggle && checkboxDescription) {
        toggle.addEventListener("change", function(event) {
            if(toggle.checked) {
                this.classList.add('js-toggle--checked');
                checkboxDescription.textContent = "dark";
            } else {
                checkboxDescription.textContent = "light";
                this.classList.remove('js-toggle--checked');
            }
            
            if (this.classList.contains('js-toggle--checked')) {
                body.classList.add('light-theme');
                localStorage.setItem('lightMode', 'true');
            } else {
                body.classList.remove('light-theme');
                setTimeout(function() {
                    localStorage.removeItem('lightMode');
                }, 100);
            }
        });

        // Initialize theme from localStorage
        if (localStorage.getItem('lightMode')) {
            body.classList.add('light-theme');
            toggle.checked = true;
            checkboxDescription.textContent = "dark";
        } else {
            toggle.checked = false;
            checkboxDescription.textContent = "light";
        }
    }
});

// Navigation scroll functionality
document.addEventListener('DOMContentLoaded', function() {
    let prevScrollpos = window.pageYOffset;
    
    window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
        const nav = document.getElementsByTagName("nav")[0];
        
        if (nav) {
            if (prevScrollpos > currentScrollPos) {
                nav.style.top = "0";
            } else {
                nav.style.top = "-50px";
            }
        }
        prevScrollpos = currentScrollPos;
    };
});

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-button');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                hamburger.textContent = '✕';
                hamburger.setAttribute('aria-expanded', 'true');
            } else {
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
