      //Modal    
        let modal = document.querySelector('.modal');
        let mdClose = document.querySelector('.modal_close');
        let btnMod = document.querySelectorAll('.modal_btn');
          
        for(let i = 0; i < btnMod.length; i++){
            btnMod[i].addEventListener('click',(e)=>{
            e.preventDefault();
            modal.classList.add('active');
            close();
          })
        }
      
       function close(){
          mdClose.addEventListener('click',(e) => {
              mdClose.classList.remove('active');
              modal.classList.remove('active'); 
            })
       }
        
 