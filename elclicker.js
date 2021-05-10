//refactor two: separate script and style into different archives

//refactor one: group common code into reusable function
function changeDisplay(targetId, intendedStyle) {
    document.getElementById(targetId).style.display = intendedStyle;
}

/*hol up, this doesnt make too much sense but it will eventually
it WILL toggle eventually
let itsOff = document.getElementById("not").style.display == "none";
^this doesn't work because it doesn't catch the properties from css file
console.log(itsOff);
this comes as false even with the property being this on the css file, apparently it's not acessible
from here
console.log(document.getElementById("not").style.display);
console.log(document.getElementById("not").style);
both of these come as an empty string but apparently it comes right after changing the style
with DOM*/


document.getElementsByClassName("maire")[0].addEventListener("click", () => {

    //refactor three: enable togglingg between harold and !harold
    
    //this doesn't work because what it's on 8-18
    //if (itsOff){

    changeDisplay("not", "inline");
    //old way:
    //document.getElementById("not").style.display = "inline";

    changeDisplay("harold", "block");
    //old way:
    //document.getElementById("harold").style.display = "block";

    changeDisplay("un", "inline");
    //master debug method:
    //console.log(document.getElementById("not").style.display);
    
    //same as 26
    //} else {
    //this should work, since when changing stuff with DOM leaves a trace
    //now we have a different problem, it's changing both at the same time
    //I'll think of something later
    /*if (document.getElementById("not").style.display == "inline") {
        
        changeDisplay("not", "none");

        changeDisplay("harold", "none");

        changeDisplay("un", "none"); 
    
    }*/

});