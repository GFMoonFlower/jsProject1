
;(function() {
let btnTxt_elementsArray = document.querySelectorAll(".btnTxt");
btnTxt_elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        this.classList.add("darkerShadeOfTxt");
        
    });
});
btnTxt_elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseout", function() {
        this.classList.remove("darkerShadeOfTxt");
    });
});

let decor_elementsArray = document.querySelectorAll(".decor");
decor_elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        this.classList.add("darkerShadeOfBackground");
    });
});
decor_elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseout", function() {
        this.classList.remove("darkerShadeOfBackground");
    });
});
let main_content_list_elem1 = document.getElementById('main_content_list_elem1');


let header_elementsArray = document.querySelectorAll(".header");
header_elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        this.classList.add("darkerShadeOfTxt");
    });
});
header_elementsArray.forEach(function(elem) {
    elem.addEventListener("mouseout", function() {
        this.classList.remove("darkerShadeOfTxt");
    });
});


let elem_header_elementsArray = document.querySelectorAll(".elem_header");
elem_header_elementsArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("show");
        this.querySelector('.elem_header_decor').classList.toggle('rotate');
    });
});
//fixed img-------------------------------------------------------------------------------------------------
//let bottom_el = document.querySelector(".bottom_el");
let main_content = document.querySelector(".main_content");

let top_el = document.querySelector("#top_el");
let main_video_wrapper1 = document.querySelector(".main_video_wrapper1");
let main_video1 = document.querySelector(".main_video1"); 
let main_video_wrapper = document.querySelector(".main_video_wrapper");
let main_video = document.querySelector(".main_video"); 
let bottom_el = document.querySelector("#bottom_el");
window.addEventListener('resize', get_fixedImgAnimation);

window.addEventListener('scroll', get_fixedImgAnimation);
window.addEventListener('load', get_fixedImgAnimation);
function get_fixedImgAnimation(){
    if(window.innerWidth >= 1000 ){
        main_video_wrapper.style.display = "flex";
        main_video.style.display = "flex";
        main_video_wrapper1.style.display = "none";
        main_video1.style.display = "none";
    var viewportOffset = top_el.getBoundingClientRect();
    // these are relative to the viewport, i.e. the window
    var top = viewportOffset.top;
    if(top < 3){
        const observer = new IntersectionObserver(
            (entries, observer) => {
              for (const entry of entries) {
                
                const intersecting = entry.isIntersecting;
                if (intersecting) { 
                    main_video_wrapper.style.position = "relative";
                    
                    
        main_content.style.left = "0%";
       main_video.style.alignSelf = "flex-end";
      
        main_video_wrapper.style.top = "0px";
        main_video.style.top = "25px";
        
                    
                  } else {
                    console.log('sfsadf!!!!');
                    main_video_wrapper.style.position = "fixed";
                    main_video_wrapper.style.top = "0px";
                    
                    main_content.style.left = "50%";
                    if(window.innerHeight < 500){
                        main_video.style.top = "0px";
                    } else {
                        main_video.style.top = "-60px";
                    }
                    
                  }
               
                
              }
            },
            // 👇 Threshold is 100%
            { threshold: 0.01, rootMargin: '0px' }
          );
          
         
    observer.observe(bottom_el);
       
    } else {
        main_video_wrapper.style.position = "relative";
        main_video.style.alignSelf = "flex-start";
        main_content.style.left = "0%";
    };
} else {
    main_video_wrapper.style.display = "none";
    main_video.style.display = "none";
    main_video_wrapper1.style.display = "flex";
        main_video1.style.display = "flex";
    
}
    
};
    



//fixed img-------------------------------------------------------------------------------------------------
//menu-------------------------------------------------------------------------------------------------------------------------------------------------
let btnMenuMin_openBtn = document.querySelector('.header_min_openBtn');
let btnMenuMin_closeBtn = document.querySelector('.header_close_btn');
let minClosedMenu = document.querySelector('.minMenuClosed');
let miMenuPhoto = document.querySelector('.miMenuPhoto');
let minMenuVeil = document.querySelector('.miMenuVeil');
let html = document.querySelector('html');

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

//menu--------------------------------------------------------------------------------------------

//.results_blocks--------------------------------------------------------------------------------------------
let results_blocks_block = document.querySelectorAll('.results_blocks_block');
results_blocks_block.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        this.classList.add("animatedBlockOver");
        this.querySelector('.results_blocks_block_txt_description').style.display = 'flex';
        this.querySelector('.results_blocks_block_txt').style.display = 'none';
        this.classList.remove("animatedBlockOut");
    });
});
results_blocks_block.forEach(function(elem) {
    elem.addEventListener("mouseout", function() {
        this.classList.remove("animatedBlockOver");
        this.classList.add("animatedBlockOut");
        this.querySelector('.results_blocks_block_txt').style.display = 'flex';
        this.querySelector('.results_blocks_block_txt_description').style.display = 'none';
        
    });
});

//.results_blocks--------------------------------------------------------------------------------------------

//all elems opacity change
/*
const observer2 = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) { 
        const intersecting = entry.isIntersecting;
        if (intersecting) { 
         

            
          } else {
           
            
          } 
      }
    },
    // 👇 Threshold is 100%
    { threshold: 0.01, rootMargin: '0px' }
  );
  

observer2.observe(bottom_el);

*/
let observerOptions3 = {
    rootMargin: '0px',
    threshold: 0.3,
  }
var observer3 = new IntersectionObserver(observerCallback3, observerOptions3);

function observerCallback3(entries, observer3) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        //do something
        entry.target.classList.add("awards_blocks_block_visible");
      }
  });
};

let target3 = '.awards_blocks_block';
document.querySelectorAll(target3).forEach((i) => {
  if (i) {
      observer3.observe(i);
  }
});



let observerOptions4 = {
    rootMargin: '0px',
    threshold: 0.3,
  }
var observer4 = new IntersectionObserver(observerCallback4, observerOptions4);

function observerCallback4(entries, observer4) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        //do something
        entry.target.classList.add("results_blocks_block_visible");
      }
  });
};

let target4 = '.results_blocks_block';
document.querySelectorAll(target4).forEach((i) => {
  if (i) {
      observer4.observe(i);
  }
});


let observerOptions5 = {
    rootMargin: '0px',
    threshold: 0.9,
  }
var observer5 = new IntersectionObserver(observerCallback5, observerOptions5);

function observerCallback5(entries, observer5) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        //do something
        entry.target.classList.add("results_description_visible");
      }
  });
};

let target5 = '.results_description';
document.querySelectorAll(target5).forEach((i) => {
  if (i) {
      observer5.observe(i);
  }
});



let observerOptions6 = {
    rootMargin: '0px',
    threshold: 0.2,
  }
var observer6 = new IntersectionObserver(observerCallback6, observerOptions6);

function observerCallback6(entries, observer6) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        //do something
        entry.target.classList.add("main_content_list_elem_visible");
      }
  });
};

let target6 = '.main_content_list_elem';
document.querySelectorAll(target6).forEach((i) => {
  if (i) {
      observer6.observe(i);
  }
});
//all elems opacity change
})();

