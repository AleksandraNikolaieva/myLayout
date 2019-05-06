let skills = document.querySelectorAll('meter');
let skillsTop = skills[0].offsetTop;
let windowH = window.innerHeight;
window.addEventListener('scroll', addAnimation)
function addAnimation() {
    if(pageYOffset + windowH > skillsTop) {
        skills.forEach(el => {
            el.className = 'animate-progress';
        })
        window.removeEventListener('scroll', addAnimation);
    }
}