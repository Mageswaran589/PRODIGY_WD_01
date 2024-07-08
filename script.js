let menu = document.querySelector('nav');
let menuBtn = document.querySelector('.menu-btn');
let closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click',function(){
    menu.classList.add('active');
})

closeBtn.addEventListener('click',function(){
    menu.classList.remove('active');
})
window.addEventListener('scroll',function(){
    const navbar = this.document.querySelector('.header');
    if(window.scrollY > 50){
        navbar.style.backgroundColor = '#6d6789';
    }
    
    else{
        navbar.style.backgroundColor = '#6d67e4';
    }
})