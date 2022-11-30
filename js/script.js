
document.addEventListener('DOMContentLoaded', function(){

const nav = document.querySelector('.navbar')
const allNavLinks = document.querySelectorAll('.nav-link')
const navList = document.querySelector('.navbar-collapse')


function addShadow() {
    
    if(window.scrollY >= 100) {
        nav.classList.add('shadow-bg');
        


    } else {
        nav.classList.remove('shadow-bg')
    }
}


allNavLinks.forEach(link => link.addEventListener('click',()=> navList.classList.remove('show')))


window.addEventListener('scroll', addShadow)


})



