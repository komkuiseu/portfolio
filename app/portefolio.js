

const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>120);
});

let menu= document.querySelector('#menu-icon');

let navlist=document.querySelector('.navlist');

menu.Onclick =() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};
