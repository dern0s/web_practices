//basic function to reuse code
function changeDisplay(targetId, intendedStyle) {
    document.getElementById(targetId).style.display = intendedStyle;
}

//harold is being used as a state for the image, when the page loads it's defaulted to false
//this is important to use into the inner if statement
let harold = false;

//here we add a click event into the header to change the page
document.getElementsByClassName("maire")[0].addEventListener("click", () => {

    //if harold image isn't displayed it turns it visible
    if (!harold) {

        changeDisplay("not", "inline");

        changeDisplay("harold", "block");
        //this block makes harold visible, so we'll say it's true now
        harold = true;

        changeDisplay("un", "inline");
    
    } else {

        changeDisplay("not", "none");

        changeDisplay("harold", "none");
        //harold is not displayed, so we'll say it's false
        harold = false;

        changeDisplay("un", "none");
    }
});