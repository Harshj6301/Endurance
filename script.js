window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    let parallax = document.querySelector('.parallax');
    parallax.style.transform = 'translateY(' + scrolled * 0.3 + 'px)';
});
