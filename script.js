const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link')

window.addEventListener('scroll', () => {
    
    if(window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }

    section.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 10){
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('.change')
            })
            navbarLinks[i].classList.add("change");
        }
    })
})