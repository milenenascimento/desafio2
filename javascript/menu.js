const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector ('.links__menu');
    hamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('open');
    });