window.onscroll = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header-2').classList.add('active');
    }else{
      document.querySelector('.header-2').classList.remove('active');
    }
  
  }