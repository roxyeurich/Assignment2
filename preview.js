/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/



//Level 3

var scrollnum = 1;

hair.addEventListener ("click", function() {
   scrollnum = scrollnum+1;
          
        if(scrollnum >= 4){
            scrollnum = 1;
        }
        
        hair.src = "img/hair"+scrollnum+".png";
                      
});

eyes.addEventListener ("click", function() {
   scrollnum = scrollnum+1;
          
        if(scrollnum >= 4){
            scrollnum = 1;
        }
        
        eyes.src = "img/eyes"+scrollnum+".png";
                      
});

nose.addEventListener ("click", function() {
   scrollnum = scrollnum+1;
          
        if(scrollnum >= 4){
            scrollnum = 1;
        }
        
        nose.src = "img/nose"+scrollnum+".png";
                      
});

mouth.addEventListener ("click", function() {
   scrollnum = scrollnum+1;
          
        if(scrollnum >= 4){
            scrollnum = 1;
        }
        
        mouth.src = "img/mouth"+scrollnum+".png";
                      
});
