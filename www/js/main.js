const header = document.querySelector('#header');


function onScroll() {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 10) {
        header.classList.add('on');
    }
    else {
        header.classList.remove('on');
    }

}

window.addEventListener('scroll', onScroll);