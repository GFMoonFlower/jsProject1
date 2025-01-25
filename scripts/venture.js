//menu-------------------------------------------------------------------------------------------------------------------------------------------------
;(function() {
//our process block slide-in effect-------------------------
let observerOptions3 = {
    rootMargin: '0px',
    threshold: 0.3,
  }
var observer3 = new IntersectionObserver(observerCallback3, observerOptions3);

function observerCallback3(entries, observer3) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        //do something
        entry.target.classList.add("slide_in");
      }
  });
};

let target3 = '.our_process_elem_header';
document.querySelectorAll(target3).forEach((i) => {
  if (i) {
      observer3.observe(i);
  }
});
//our process block slide-in effect-------------------------

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
//img--------------------------------------------------------------------------------------------
let header_img_Img = document.querySelector('.header_img_Img');
let header_img = document.querySelector('.header_img');
window.addEventListener('resize', resizeHeight);
window.addEventListener('load', resizeHeight);
function resizeHeight(){
    if(this.innerWidth <= 510){
        header_img_Img.classList.remove('biggerHeightImg_biggerWidth');
            header_img.classList.remove('biggerHeightImgWrapper1_biggerWidth');
        if(this.innerHeight >= 850){
            header_img_Img.classList.add('biggerHeightImg');
            header_img.classList.add('biggerHeightImgWrapper1');
        } else {
            header_img_Img.classList.remove('biggerHeightImg');
            header_img.classList.remove('biggerHeightImgWrapper1');
          
        }
    } 
    else if(this.innerWidth >= 750){
        header_img_Img.classList.remove('biggerHeightImg');
            header_img.classList.remove('biggerHeightImgWrapper1');
        if(this.innerHeight >= 500 ){
            header_img_Img.classList.add('biggerHeightImg_biggerWidth');
            header_img.classList.add('biggerHeightImgWrapper1_biggerWidth');
        } else {
            header_img_Img.classList.remove('biggerHeightImg_biggerWidth');
            header_img.classList.remove('biggerHeightImgWrapper1_biggerWidth');
        }
        
            
    } else {
        header_img_Img.classList.add('biggerHeightImg_biggerWidth');
            header_img.classList.add('biggerHeightImgWrapper1_biggerWidth');
    }
    
};


//img--------------------------------------------------------------------------------------------
//our work block--------------------------------------------------------------------------------------------
let our_work_main_block = document.querySelectorAll('.our_work_main_block');
our_work_main_block.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        this.classList.add("animatedBlockOver");
        
    });
});
our_work_main_block.forEach(function(elem) {
    elem.addEventListener("mouseout", function() {
        this.classList.remove("animatedBlockOver");
        
    });
});


let observerOptions1 = {
    rootMargin: '80px',
    threshold: 0.1,
  }
var observer1 = new IntersectionObserver(observerCallback1, observerOptions1);

function observerCallback1(entries, observer3) {
  entries.forEach(entry => {
      if(entry.isIntersecting) {
        //do something
        entry.target.classList.add("translateUp");
      }
  });
};

let target1 = '.our_work_main_block';
document.querySelectorAll(target1).forEach((i) => {
  if (i) {
      observer1.observe(i);
  }
});
//our work block--------------------------------------------------------------------------------------------

//our process block--------------------------------------------------------------------------------------------
let our_process_elem_header_arrow1 = document.querySelector('.our_process_elem_header_arrow1');
let our_process_elem_header1 = document.querySelector('.our_process_elem_header1');
let our_process_elem1 = document.querySelector('.our_process_elem1');
our_process_elem_header1.addEventListener('click', function(){
    our_process_elem_header_arrow1.classList.toggle('turnArrow');
    our_process_elem1.classList.toggle('biggerHeight_our_process_elem1');
});

let our_process_elem_header_arrow2 = document.querySelector('.our_process_elem_header_arrow2');
let our_process_elem_header2 = document.querySelector('.our_process_elem_header2');
let our_process_elem2 = document.querySelector('.our_process_elem2');
our_process_elem_header2.addEventListener('click', function(){
    our_process_elem_header_arrow2.classList.toggle('turnArrow');
    our_process_elem2.classList.toggle('biggerHeight_our_process_elem2');
});

let our_process_elem_header_arrow3 = document.querySelector('.our_process_elem_header_arrow3');
let our_process_elem_header3 = document.querySelector('.our_process_elem_header3');
let our_process_elem3 = document.querySelector('.our_process_elem3');
our_process_elem_header3.addEventListener('click', function(){
    our_process_elem_header_arrow3.classList.toggle('turnArrow');
    our_process_elem3.classList.toggle('biggerHeight_our_process_elem3');
});

let our_process_elem_header_arrow4 = document.querySelector('.our_process_elem_header_arrow4');
let our_process_elem_header4 = document.querySelector('.our_process_elem_header4');
let our_process_elem4 = document.querySelector('.our_process_elem4');
our_process_elem_header4.addEventListener('click', function(){
    our_process_elem_header_arrow4.classList.toggle('turnArrow');
    our_process_elem4.classList.toggle('biggerHeight_our_process_elem4');
});

let our_process_elem_header_arrow5 = document.querySelector('.our_process_elem_header_arrow5');
let our_process_elem_header5 = document.querySelector('.our_process_elem_header5');
let our_process_elem5 = document.querySelector('.our_process_elem5');
our_process_elem_header5.addEventListener('click', function(){
    our_process_elem_header_arrow5.classList.toggle('turnArrow');
    our_process_elem5.classList.toggle('biggerHeight_our_process_elem5');
});

let our_process_elem_header_arrow6 = document.querySelector('.our_process_elem_header_arrow6');
let our_process_elem_header6 = document.querySelector('.our_process_elem_header6');
let our_process_elem6 = document.querySelector('.our_process_elem6');
our_process_elem_header6.addEventListener('click', function(){
    
    our_process_elem6.classList.toggle('biggerHeight_our_process_elem6');
    our_process_elem_header_arrow6.classList.toggle('turnArrow');
});


let our_process_elem_headers = document.querySelectorAll('.our_process_elem_header');
our_process_elem_headers.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        
        this.querySelector('.our_process_elem_header_num').classList.add('our_process_elem_mouseover');
        this.querySelector('.our_process_elem_header_h6').classList.add('our_process_elem_mouseover');
        
    });
});
our_process_elem_headers.forEach(function(elem) {
    elem.addEventListener("mouseout", function() {
        this.querySelector('.our_process_elem_header_num').classList.remove('our_process_elem_mouseover');
        this.querySelector('.our_process_elem_header_h6').classList.remove('our_process_elem_mouseover');
        
    });
});



//our process block--------------------------------------------------------------------------------------------
})();
