document.querySelector('.btn-nav-menu').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.dynamic', {delay: 250});
ScrollReveal().reveal('.first-banner', {delay: 250});
ScrollReveal().reveal('.second-banner', {delay: 250});