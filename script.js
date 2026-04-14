document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE HAMBURGER MENU
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // 2. HIGHLIGHT ACTIVE NAV LINK
    // This script checks the URL and adds an 'active-link' class to the correct menu item
    const currentLocation = window.location.pathname;
    const menuItems = document.querySelectorAll('.nav-links a');
    
    menuItems.forEach(link => {
        // If the URL contains the link's href (e.g., "events.html")
        if (link.href.includes(`${currentLocation}`) && currentLocation !== "/") {
            link.classList.add('active-link');
        } 
        // Fallback for root index (just typing domain.com/)
        else if (currentLocation === "/" && link.href.includes('index.html')) {
            link.classList.add('active-link');
        }
    });

    // 3. AUTOMATIC COPYRIGHT YEAR
    // Grabs ALL elements with class="year" to support multi-page footers
    const yearSpans = document.querySelectorAll('.year');
    const currentYear = new Date().getFullYear();
    yearSpans.forEach(span => {
        span.textContent = currentYear;
    });

    // 4. BASIC FORM FEEDBACK
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const btn = contactForm.querySelector('button[type="submit"]');
            btn.textContent = "Sending...";
            btn.style.opacity = "0.7";
        });
    }
});