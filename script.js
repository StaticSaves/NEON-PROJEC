document.addEventListener('DOMContentLoaded', () => {
    console.log('NEON-PROJEC - Estilo Punk Rock & Pixel Art cargado.');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Simple interaction for the hero button
    const heroBtn = document.querySelector('.pixel-btn');
    if (heroBtn) {
        heroBtn.addEventListener('click', () => {
            alert('¡Bienvenido NEON-PROJEC! Esta es una demostración del proyecto.');
        });
    }
});
