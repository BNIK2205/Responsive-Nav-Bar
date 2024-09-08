document.addEventListener('DOMContentLoaded', function () {
    const parts = document.querySelectorAll('.part');
    const body = document.body;

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(parts).indexOf(entry.target);
                const gradientPosition = (index / (parts.length - 1)) * 100; 

                body.style.backgroundPosition = `0% ${gradientPosition}%`;
            }
        });
    };

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    parts.forEach(part => observer.observe(part));

    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active'); 
    });
});
