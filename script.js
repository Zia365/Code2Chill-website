
// Code2Chill website


// ==========================
// CODE2CHILL INTERACTIONS
// ==========================

// 1. Scroll reveal animation

const revealElements = document.querySelectorAll(
    '.section-tag, .section h2, .section-description, ' +
    '.activity-card, .event-card, .stat, ' +
    '.community-box, .join-content'
);

revealElements.forEach((element) => {
    element.classList.add('reveal');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});


// 2. Navbar shadow on scroll

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// 3. Welcome message

console.log(
    "%c Welcome to Code2Chill! ",
    "background: #8b5cf6; color: white; font-size: 18px; padding: 10px;"
);

console.log("Code. Connect. Chill.");

