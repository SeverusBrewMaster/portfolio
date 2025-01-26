document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navRight = document.querySelector('.nav-right');

    menuToggle.addEventListener('click', function() {
        navRight.classList.toggle('active');
    });
});