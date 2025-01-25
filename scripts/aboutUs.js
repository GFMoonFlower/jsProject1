
;(function() {
//menu-------------------------------------------------------------------------------------------------------------------------------------------------
  let btnMenuMin_openBtn = document.querySelector('.header_min_openBtn');
  let btnMenuMin_closeBtn = document.querySelector('.header_close_btn');
  let minClosedMenu = document.querySelector('.minMenuClosed');
  let miMenuPhoto = document.querySelector('.miMenuPhoto');
  let minMenuVeil = document.querySelector('.miMenuVeil');
  let html = document.querySelector('html');
  let lenses_showMore_btn = document.querySelector('.lenses_showMore_btn');
  btnMenuMin_openBtn.addEventListener('click', function(){
      minClosedMenu.classList.add("minMenu_active");
      
      this.classList.add("menuMin_openBtn_hidden");
      minMenuVeil.classList.add("active");
      html.classList.add("overFlow_hidden");
      
        miMenuPhoto.classList.add("miMenuPhoto_active");
     
     
  });
  btnMenuMin_closeBtn.addEventListener('click', function(){
      minClosedMenu.classList.remove("minMenu_active");
      btnMenuMin_openBtn.classList.remove("menuMin_openBtn_hidden");
      minMenuVeil.classList.remove("active");
      html.classList.remove("overFlow_hidden");
      miMenuPhoto.classList.remove("miMenuPhoto_active");
  });

  //menu-------------------------------------------------------------------------------------------------------------------------------------------------

  let lenses_elem1 = document.getElementById('el1');
let lenses_elem2 = document.getElementById('el2');
let lenses_elem3 = document.getElementById('el3');
let lenses_elem4 = document.getElementById('el4');
let lenses_elem5 = document.getElementById('el5');
let lenses_elem6 = document.getElementById('el6');
lenses_elem1.addEventListener('click', func);
lenses_elem2.addEventListener('click', func);
lenses_elem3.addEventListener('click', func);
lenses_elem4.addEventListener('click', func);
lenses_elem5.addEventListener('click', func);
lenses_elem6.addEventListener('click', func);

function func(){
    this.nextElementSibling.classList.toggle("show");
    this.querySelector('.lenses_showMore_btn').classList.toggle("rotate");
  };


//members loading----------------------------------------------


let observerOptions1 = {
  rootMargin: '0px',
  threshold: 1
}

var observer1 = new IntersectionObserver(observerCallback1, observerOptions1);

function observerCallback1(entries, observer) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        //do something
        entry.target.classList.add("members_loading");
      }
  });
};

let target1 = '.about_team_ourTeam_member';
document.querySelectorAll(target1).forEach((i) => {
  if (i) {
      observer1.observe(i);
  }
});


const observer2 = new IntersectionObserver(
    (entries, observer2) => {
      for (const entry of entries) {
       // const intersecting = entry.isIntersecting;
        /*entry.target.style.backgroundColor = intersecting ? 'blue' : 'black'; */
        if (entry.isIntersecting) { 
            
          about_team_content_p.classList.add("members_loading");
            
          } 
       
        
      }
    },
    // 👇 Threshold is 100%
    { threshold: 0.05, rootMargin: '0px' }
  );
  const about_team_content_p = document.querySelector('.about_team_content_p');
  observer2.observe(about_team_content_p);

//members loading----------------------------------------------
})();