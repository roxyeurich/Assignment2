var changeColor = document.getElementById("myColor");
var previewMenu = document.getElementById("preview");
var changeRangeOne = document.getElementById("myRange1");
var changeRangeTwo = document.getElementById("myRange2");
var changeRangeThree = document.getElementById("myRange3");
var changeRangeFour = document.getElementById("myRange4");
var numberButton = document.getElementById("bnumber");
var rangeButton = document.getElementById("brange");
var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");
var random = document.getElementById("brandom");
var auto = document.getElementById("bauto");
var stop = document.getElementById("bstop");


//FUNCTIONS 2

function changeType(type){
        changeRangeOne.type = type; 
        changeRangeTwo.type = type; 
        changeRangeThree.type = type; 
        changeRangeFour.type = type; 
}


var newDiv = null;
//FUNCTIONS 4
function createFace(){
        newDiv = document.createElement("div");
        dispDiv.appendChild(newDiv);
        newDiv.className = "boxes";
        
        newDiv.style.width = iw+"px";
        newDiv.style.height = ih+"px";
        newDiv.style.backgroundColor = previewMenu.style.backgroundColor;
        newDiv.style.position = "relative";
    
    
        var newHair = document.createElement("img");
        newHair.src = hair.src;
        newDiv.appendChild(newHair);
        newHair.className = "items";
    
        newHair.style.width = hair.style.width;
        newHair.style.top = hair.style.top;
        newHair.style.margin = "auto";
    
    
        var newEyes = document.createElement("img");
        newEyes.src = eyes.src;
        newDiv.appendChild(newEyes);
        newEyes.className = "items";
    
        newEyes.style.width = eyes.style.width;
        newEyes.style.top = eyes.style.top;
        newEyes.style.margin = "auto";

    

        var newNose = document.createElement("img");
        newNose.src = nose.src;
        newDiv.appendChild(newNose);
        newNose.className = "items";
    
        newNose.style.width = nose.style.width;
        newNose.style.top = nose.style.top;
        newNose.style.margin = "auto";
   
        
        var newMouth = document.createElement("img");
        newMouth.src = mouth.src;
        newDiv.appendChild(newMouth);
        newMouth.className = "items";
    
        newMouth.style.width = mouth.style.width;
        newMouth.style.top = mouth.style.top;
        newMouth.style.margin = "auto";
    
newDiv.addEventListener("click", function() {       
    dispDiv.removeChild(this); 
});
}

function randomFace(){
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    
    previewMenu.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    
    var rsizehair = Math.round(Math.random()*70);
    var rsizeeyes = Math.round(Math.random()*40);
    var rsizenose = Math.round(Math.random()*30);
    var rsizemouth = Math.round(Math.random()*35);
    
    var randhair = Math.round(Math.random()*2)+1;
    var randeyes = Math.round(Math.random()*2)+1;
    var randnose = Math.round(Math.random()*2)+1;
    var randmouth = Math.round(Math.random()*2)+1;
    
    hair.style.width = rsizehair+"%";
    eyes.style.width = rsizeeyes+"%";
    nose.style.width = rsizenose+"%";
    mouth.style.width = rsizemouth+"%"; 

    hair.src = "img/hair"+randhair+".png";
    eyes.src = "img/eyes"+randeyes+".png";
    nose.src = "img/nose"+randnose+".png";
    mouth.src = "img/mouth"+randmouth+".png";
    
    changeRangeOne.value = rsizehair;
    changeRangeTwo.value = rsizeeyes;
    changeRangeThree.value = rsizenose;
    changeRangeFour.value = rsizemouth;
}

//Level 2

changeColor.addEventListener("change", function(){
   previewMenu.style.backgroundColor =  changeColor.value;                        
});

numberButton.addEventListener("click", function(){
    changeType("number");
});

rangeButton.addEventListener("click", function(){
    changeType("range");
 
});


changeRangeOne.addEventListener("change", function(){
    hair.style.width = changeRangeOne.value+"%";
});

changeRangeTwo.addEventListener("change", function(){
    eyes.style.width = changeRangeTwo.value+"%";
});

changeRangeThree.addEventListener("change", function(){
    nose.style.width = changeRangeThree.value+"%";
});

changeRangeFour.addEventListener("change", function(){
    mouth.style.width = changeRangeFour.value+"%";
});

//Level 4A


var iw = 100;
var ih = 100;
var dispDiv = document.getElementById("display");

document.getElementById("bplus").addEventListener("click", function(){ 
       createFace();
});


//LEVEL 4B
random.addEventListener("click", function(){
    randomFace();
});

//LEVEL 6
var autocreate = null;
var autorandomize = null;

auto.addEventListener("click", function(){ 
    autocreate = setInterval(createFace, 500);
    autorandomize = setInterval(randomFace, 500);
});

stop.addEventListener("click", function(){ 
    clearInterval(autocreate);
    clearInterval(autorandomize);
});

