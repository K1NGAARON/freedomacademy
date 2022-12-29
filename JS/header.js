const header = document.querySelector('#header');
const sticky = header.offsetTop;

function makeSticky() {
    console.log('TEST');
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};

document.addEventListener('scroll', makeSticky);