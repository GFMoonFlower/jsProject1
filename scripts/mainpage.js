;(function() {
  /*header block----------------------------------------------------------------------------------------------------------------------------------*/ 
let btnMenuMin_openBtn = document.querySelector('.header_min_openBtn');
let btnMenuMin_closeBtn = document.querySelector('.header_close_btn');
let minClosedMenu = document.querySelector('.minMenuClosed');
let minMenuVeil = document.querySelector('.miMenuVeil');
let body = document.querySelector('body');

btnMenuMin_openBtn.addEventListener('click', function(){
    minClosedMenu.classList.add("minMenu_active");
    
    this.classList.add("menuMin_openBtn_hidden");
    minMenuVeil.classList.add("active");
    body.classList.add("overFlow_hidden");
   
});
btnMenuMin_closeBtn.addEventListener('click', function(){
    minClosedMenu.classList.remove("minMenu_active");
    btnMenuMin_openBtn.classList.remove("menuMin_openBtn_hidden");
    minMenuVeil.classList.remove("active");
    
    
});
/*header block----------------------------------------------------------------------------------------------------------------------------------*/ 
/*about block----------------------------------------------------------------------------------------------------------------------------------*/ 

function setOverLay() {
    if(window.innerWidth >= 1000){
        let elem = document.querySelector('.about_overlay');
            
        let elem_arrow = document.querySelector('.about_overlay_down');
        if(window.innerHeight < 490){
           // console.log('innerH@!--------');
            let scrollPosition = window.scrollY;
            let windowHeight = window.innerHeight;
            
            // Рассчитываем уровень прозрачности в зависимости от скролла (от 1 до 0)
            let opacity = 1 - scrollPosition / windowHeight;
      
            // Ограничиваем значение opacity между 0 и 1
            opacity = Math.max(0, Math.min(opacity, 1));
      
            // Применяем прозрачность к overlay
            elem.style.opacity = opacity;
            elem_arrow.style.opacity = opacity  - 0.6;
            
        } else {
           // console.log('innerH@!++++++++');
            let scrollPosition = window.scrollY - 300;
        let windowHeight = window.innerHeight - 380;
        
        // Рассчитываем уровень прозрачности в зависимости от скролла (от 1 до 0)
        let opacity = 1 - scrollPosition / windowHeight;
    
        // Ограничиваем значение opacity между 0 и 1
        opacity = Math.max(0, Math.min(opacity, 1));
    
        // Применяем прозрачность к overlay
        elem.style.opacity = opacity;
        elem_arrow.style.opacity = opacity - 0.6;
        }
    
    }     
          };
        window.addEventListener('resize', setOverLay);
        window.addEventListener('scroll', setOverLay);
        window.addEventListener('scroll', function() {
            // Получаем высоту прокрутки
            let scrollPosition = window.scrollY;
        
            // Получаем элемент с id "scroll-block"
            let block = document.querySelector('.about_overlay_decoration_whiteLine');
            
            // Меняем цвет в зависимости от положения прокрутки
            if (scrollPosition > 100) {
                block.style.backgroundColor = 'rgb(233, 233, 233)'; 
                ;
                // Если прокрутка больше 100px, блок становится серым
            } else {
                block.style.backgroundColor = 'white';
                 // Если меньше — белым
            }
});
/*about block----------------------------------------------------------------------------------------------------------------------------------*/ 
/*insights block----------------------------------------------------------------------------------------------------------------------------------*/


/*insights block----------------------------------------------------------------------------------------------------------------------------------*/ 

/*tracking block----------------------------------------------------------------------------------------------------------------------------------*/ 
const tracking_main = document.querySelector('.tracking_main');
const observer = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        const intersecting = entry.isIntersecting;
        /*entry.target.style.backgroundColor = intersecting ? 'blue' : 'black'; */
        if (entry.isIntersecting) { 
            
            tracking_main.classList.add("tracking_main_anim");
            
          } 
       
        
      }
    },
    // 👇 Threshold is 100%
    { threshold: 0.05, rootMargin: '0px' }
  );
  const tracking = document.querySelector('.tracking');
  observer.observe(tracking);
  /*tracking block----------------------------------------------------------------------------------------------------------------------------------*/ 
  /*tra_labs block----------------------------------------------------------------------------------------------------------------------------------*/ 
  const TRALabs_main = document.querySelector('.TRALabs_main');
const observer2 = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        const intersecting = entry.isIntersecting;
        /*entry.target.style.backgroundColor = intersecting ? 'blue' : 'black'; */
        if (entry.isIntersecting) { 
            TRALabs_main.classList.add("TRALabs_main_anim");
            
           // observer.unobserve(entry.target); 
          } 
       
        
      }
    },
    // 👇 Threshold is 100%
    { threshold: 0.05, rootMargin: '0px' }
  );
  const tra_labs = document.querySelector('.TRALabs');
  observer2.observe(tra_labs);
   /*tra_labs block----------------------------------------------------------------------------------------------------------------------------------*/

let subscription_block_inview = false;

   const observer3 = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        const intersecting = entry.isIntersecting;
        /*entry.target.style.backgroundColor = intersecting ? 'blue' : 'black'; */

        if (intersecting) { 
          subscription_block_inview = true;
          if(window.innerWidth > 1000){
         
            document.querySelector('.VideoTag').style.display = "none";
            document.querySelector('.emptyBlockTRALAbs').style.display = "none";
            document.querySelector('.header_img_wrapper').style.display = "flex";
            document.querySelector('.VideoTag2').style.display = "block";
           } 
        else {
            document.querySelector('.VideoTag').style.display = "block";
            document.querySelector('.emptyBlockTRALAbs').style.display = "block";
            document.querySelector('.header_img_wrapper').style.display = "none";
            document.querySelector('.VideoTag2').style.display = "none";
       }
    
            
           // observer.unobserve(entry.target); 
          } else {
            document.querySelector('.VideoTag').style.display = "block";
            document.querySelector('.emptyBlockTRALAbs').style.display = "block";
            document.querySelector('.header_img_wrapper').style.display = "none";
            document.querySelector('.VideoTag2').style.display = "none";
          }
       
        
      }
    },
    // 👇 Threshold is 100%
    { threshold: 0.05, rootMargin: '0px' }
  );
  const subscription = document.querySelector('.subscription');
  observer3.observe(subscription);

//big menu scripts------------------------------------------------------------------------------------------------------------------------------


let menu_Big = document.querySelector('.menu-Big');

let header_bigMenuBtn = document.querySelector('.header_fixedMenuBtn-Big_open');
header_bigMenuBtn.addEventListener('click', getBigMenuOpened);

let header_fixedMenuBtnBig_close = document.querySelector('.header_fixedMenuBtn-Big_close');
header_fixedMenuBtnBig_close.addEventListener('click', getBigMenuClosed);
let isBigMenuOpened = false;
function getBigMenuOpened(){
  let components = document.querySelectorAll('.componentsOfApp');
  for(let component of components){
    component.style.transition = 'transform 0.3s ease-out 0s';
  component.style.transform = 'translate(100%, 0px)';
  };
  var htmlElement = document.querySelector("html");
  let header_componentNotFixed = document.querySelector('.header_img_wrapper');
  let header_component = document.querySelector('.header_fixedImg_wrapper');
  header_component.style.transition = 'all 0.3s ease-out 0s';
  header_component.style.transform = 'translateX(100%)';
  header_componentNotFixed.style.transform = 'translateX(100%)';
  header_componentNotFixed.style.transition = 'all 0.3s ease-out 0s';
 htmlElement.style.overflowY = 'hidden';
 this.classList.add('openBtn-Big_Active');
 menu_Big.classList.add('menu-Big_Active');
 isBigMenuOpened = true;
};

function getBigMenuClosed(){
  let components = document.querySelectorAll('.componentsOfApp');
  var htmlElement = document.querySelector("html");
  for(let component of components){
    component.style.transition = 'transform 0.3s ease-out 0s';
  component.style.transform = 'none';
  };
  let header_componentNotFixed = document.querySelector('.header_img_wrapper');
  let header_component = document.querySelector('.header_fixedImg_wrapper');

 header_component.style.transition = 'all 0.3s ease-out 0s';
 header_component.style.transform = 'translateX(0%)';
 
 header_componentNotFixed.style.transition = 'all 0.3s ease-out 0s';
 header_componentNotFixed.style.transform = 'translateX(0%)';
 htmlElement.style.overflowY = 'auto';
 
  menu_Big.classList.remove('menu-Big_Active');
  isBigMenuOpened = false;
};



  window.addEventListener('resize', function(){
    

   
    let innerWidthOfPage = window.innerWidth;   
    if(innerWidthOfPage < 1000){    
      let components = document.querySelectorAll('.componentsOfApp');
      var htmlElement = document.querySelector("html");
      for(let component of components){      
          component.style.transform = 'none';
      };
      let header_componentNotFixed = document.querySelector('.header_img_wrapper');
      let header_component = document.querySelector('.header_fixedImg_wrapper');
      
      header_component.style.transform = 'translateX(-50%)';
      header_component.style.left = '50%';
      header_component.style.transition = 'transform 0s ease-out 0s';
      header_componentNotFixed.style.transform = 'translateX(0%)';
     
     htmlElement.style.overflowY = 'auto';          
    } else {    
        if(!isBigMenuOpened){
          let components = document.querySelectorAll('.componentsOfApp');
          var htmlElement = document.querySelector("html");
          for(let component of components){
            component.style.transform = 'none';
          };
          let header_componentNotFixed = document.querySelector('.header_img_wrapper');
          let header_component = document.querySelector('.header_fixedImg_wrapper');
          header_component.style.transition = 'none';

          header_component.style.transform = 'translateX(0%)';
          header_component.style.left = '0px';

          header_componentNotFixed.style.transform = 'translateX(0%)';
          htmlElement.style.overflowY = 'auto';
        } else {
          let components = document.querySelectorAll('.componentsOfApp');
          for(let component of components){
            component.style.transform = 'translateX(100%)';
          };
          var htmlElement = document.querySelector("html");
          let header_componentNotFixed = document.querySelector('.header_img_wrapper');
          let header_component = document.querySelector('.header_fixedImg_wrapper');
          header_component.style.transform = 'translateX(100%)';
          header_componentNotFixed.style.transform = 'translateX(0%)';
          header_component.style.transition = 'none';
          header_component.style.left = '0px';
          htmlElement.style.overflowY = 'hidden';
     };  
    };  
  });

  
//big menu scripts------------------------------------------------------------------------------------------------------------------------------
})();