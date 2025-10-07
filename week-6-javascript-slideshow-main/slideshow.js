// create a reference to all slides
var slides = document.getElementsByClassName("slide");

var current = 0;
var total = slides.length;

//next control
var next = document.getElementById("next");

//previous control
var previous = document.getElementById("previous");

next.addEventListener("click", function(){
    current ++;

    if (current >= total){
        current = 0;
    }
   
    // Hide all slides
    for(var i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    // Display current
    slides[current].style.display = "block";

});



// Previous button
previous.addEventListener("click", function() {
    current --;
    if (current < 0) {
        current = total - 1;
    }

    // Hide all slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display current
    slides[current].style.display = "block";
});
