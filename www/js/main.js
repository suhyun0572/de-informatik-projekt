const header = document.querySelector('#header');
const richtSide = document.querySelector('div.right_side');
const loginPopUp = document.querySelector('article.login');
const contents = document.querySelector('.contents');
const close = document.querySelector('.close');



function onScroll() {
    //console.log(window.pageYOffset);
    if (window.pageYOffset >= 10) {
        header.classList.add('on');
    }
    else {
        header.classList.remove('on');
    }

}


function popup() {
    console.log("hit!");
    loginPopUp.classList.toggle('on');
    contents.classList.toggle('on');
}

richtSide.addEventListener('click', popup);
close.addEventListener('click', popup);


window.addEventListener('scroll', onScroll);