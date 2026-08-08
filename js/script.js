// ============================================
// MOBILE NAVIGATION
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============================================
// NAVBAR SCROLLING EFFECT
// ============================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation on scroll
document.querySelectorAll('.project-card, .timeline-content, .education-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ============================================
// LANGUAGE PROGRESS BAR ANIMATION
// ============================================

const languageProgressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach((bar, index) => {
                const delay = index * 100;
                setTimeout(() => {
                    bar.style.opacity = '1';
                }, delay);
            });
            languageProgressObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const languagesSection = document.querySelector('.languages');
if (languagesSection) {
    languageProgressObserver.observe(languagesSection);
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================

const scrollTopButton = document.createElement('button');
scrollTopButton.className = 'scroll-to-top';
scrollTopButton.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
`;
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #d4af37;
    border: none;
    border-radius: 0;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    color: #0a0a0a;
    z-index: 999;
    transition: all 0.3s ease-in-out;
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopButton.addEventListener('mouseenter', () => {
    scrollTopButton.style.transform = 'translateY(-5px)';
});

scrollTopButton.addEventListener('mouseleave', () => {
    scrollTopButton.style.transform = 'translateY(0)';
});

// ============================================
// PARALLAX SCROLLING EFFECT
// ============================================

const parallaxElements = document.querySelectorAll('[data-parallax]');

if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const elementOffset = element.offsetTop;
            const distance = scrollPosition - elementOffset;
            const percentage = (distance / window.innerHeight) * 100;

            if (percentage < 100 && percentage > -100) {
                element.style.transform = `translateY(${percentage * 0.5}px)`;
            }
        });
    });
}

// ============================================
// ADD PARALLAX DATA ATTRIBUTE TO HERO
// ============================================

const heroVisual = document.querySelector('.hero-visual');
if (heroVisual) {
    heroVisual.setAttribute('data-parallax', 'true');
}

// ============================================
// LAZY LOAD IMAGES
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// FORM INTERACTIONS
// ============================================

const contactLinks = document.querySelectorAll('.contact-item a, .btn-primary');

contactLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.href.startsWith('mailto:') || this.href.startsWith('tel:')) {
            // Allow default behavior for email and phone links
            return;
        }
    });
});

// ============================================
// ADD LOADING STATE TO EXTERNAL LINKS
// ============================================

const externalLinks = document.querySelectorAll('a[target="_blank"]');

externalLinks.forEach(link => {
    link.addEventListener('mousedown', function() {
        this.style.opacity = '0.7';
    });

    link.addEventListener('mouseup', function() {
        this.style.opacity = '1';
    });
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // Scroll to top on Home key
    if (e.key === 'Home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Scroll to bottom on End key
    if (e.key === 'End') {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// ============================================
// DYNAMICALLY ADD FOCUS STYLES
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ============================================
// PAGE PERFORMANCE OPTIMIZATION
// ============================================

// Debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Handle resize events with delay
    }, 250);
});

// ============================================
// ANALYTICS HELPER (Optional)
// ============================================

const trackEvent = (eventName, eventData = {}) => {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
};

// Track section views
document.querySelectorAll('section[id]').forEach(section => {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackEvent('section_view', {
                    section: entry.target.id
                });
            }
        });
    }, { threshold: 0.25 });

    sectionObserver.observe(section);
});

// Track external link clicks
externalLinks.forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('external_link_click', {
            url: link.href,
            text: link.textContent
        });
    });
});

// ============================================
// DARK MODE TOGGLE (Optional Enhancement)
// ============================================

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const prefersLightMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

if (prefersLightMode) {
    document.documentElement.style.colorScheme = 'light';
} else if (prefersDarkMode) {
    document.documentElement.style.colorScheme = 'dark';
}

// Listen for system color scheme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (e.matches) {
        document.documentElement.style.colorScheme = 'dark';
    }
});

window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (e.matches) {
        document.documentElement.style.colorScheme = 'light';
    }
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%cWelcome to Rayane Inaghnane\'s Portfolio', 'font-size: 24px; font-weight: bold; color: #d4af37;');
console.log('%cDocumentary Filmmaker • Visual Artist • Creative Director', 'font-size: 14px; color: #b3b3b3;');
console.log('%cBuilt with intentionality & craftsmanship', 'font-size: 12px; color: #666;');

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    const initAnimations = () => {
        // Add fade-in animation to hero content
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.animation = 'fadeInUp 1s ease-out';
        }
    };

    initAnimations();

    // Log when page is fully loaded
    window.addEventListener('load', () => {
        console.log('Portfolio fully loaded');
    });
});

// ============================================
// SERVICE WORKER REGISTRATION (Optional)
// ============================================

if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker
    // navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed'));
}
