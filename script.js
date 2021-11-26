window.addEventListener('scroll',function(){
    let value = window.scrollY;
    moon.style.top = value * 1.3 +'px';
    moutain.style.top = value * 1 +'px';

})
