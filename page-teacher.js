const accBtns = document.querySelectorAll('.item-btn');
        
        accBtns.forEach((el) => {
         el.addEventListener('click', () => {
           let accContent = el.nextElementSibling;
           let icon = el.lastChild;
           if(accContent.style.maxHeight){
             document.querySelectorAll('.item-content').forEach((el) => el.style.maxHeight = null);
             accContent.style.maxHeight = null;
             icon.style.transform = 'rotate(-0)'
             icon.style.transition = 'transform 0.5s'
             
           }else{
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            accContent.style.maxHeight = accContent.scrollHeight + 'px';
            icon.style.transform = 'rotate(180deg)' 
            icon.style.transition = 'transform 0.5s'
          }
         })
       })