document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const heroContent = document.querySelector('.hero-content');
    const floatingLayer = document.querySelector('.floating-elements');

    // Create soft floating circles for the cozy hero
    function createFloatingElements() {
        const count = 8;
        const colors = ['#ffffff', '#a4c9d7', '#e3a6a1', '#fcf6e5'];

        for (let i = 0; i < count; i++) {
            const item = document.createElement('div');
            item.className = 'float-item';

            const size = Math.random() * 100 + 50;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 5;
            const color = colors[Math.floor(Math.random() * colors.length)];

            item.style.width = `${size}px`;
            item.style.height = `${size}px`;
            item.style.top = `${top}%`;
            item.style.left = `${left}%`;
            item.style.backgroundColor = color;
            item.style.animationDelay = `${delay}s`;
            item.style.animationDuration = `${Math.random() * 10 + 10}s`;

            floatingLayer.appendChild(item);
        }
    }

    if (floatingLayer) {
        createFloatingElements();
    }

    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal animations using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    const revealItems = document.querySelectorAll('.game-card, .section-header, .about-text, .about-visual, .hero-content');

    revealItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(item);
    });

    // Dynamic class for reveal
    const style = document.createElement('style');
    style.textContent = `
        .active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
