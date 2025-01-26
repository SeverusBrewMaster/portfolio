document.addEventListener('DOMContentLoaded', () => {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    }

    // Add click event listeners to all nav buttons
    const navButtons = document.querySelectorAll('.button-nav');
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const sectionId = e.target.textContent.replace(/\s/g, '').toLowerCase();
            scrollToSection(sectionId);
        });
    });
});