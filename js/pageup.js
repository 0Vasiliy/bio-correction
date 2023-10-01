  // Up button
    let upp = document.querySelector('.pageup');

    window.onscroll = function(){
    if(window.pageYOffset > 580){
        upp.style.display = "block"
    }
    else{
        upp.style.display ="none"
    }
    }
  
    upp.addEventListener('click',function(){
    window.scrollBy({
        top:-document.documentElement.scrollHeight,
        behavior: "smooth"
    })
    })  
