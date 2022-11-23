
document.addEventListener('DOMContentLoaded', function(){

const nav = document.querySelector('.navbar')


function addShadow() {
    
    if(window.scrollY >= 100) {
        nav.classList.add('shadow-bg')
    } else {
        nav.classList.remove('shadow-bg')
    }
}




window.addEventListener('scroll', addShadow)

})


