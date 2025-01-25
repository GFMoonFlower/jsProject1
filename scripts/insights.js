;(function() {
 /*header block----------------------------------------------------------------------------------------------------------------------------------*/ 

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
//forms-------------------------------------------------------------------------------------------
 let select = document.querySelectorAll('select');
 select.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
        
        this.classList.add("select_hover");
    });
});
select.forEach(function(elem) {
    elem.addEventListener("mouseout", function() {
        this.classList.remove("select_hover");
        
        
    });
});
//forms-------------------------------------------------------------------------------------------
 /*header block----------------------------------------------------------------------------------------------------------------------------------*/ 
})();