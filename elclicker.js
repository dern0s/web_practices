//refactor two: separate script and style into different archives

//refactor one: group common code into reusable function
function changeDisplay(targetId, intendedStyle) {
    document.getElementById(targetId).style.display = intendedStyle;
}

document.getElementsByClassName("maire")[0].addEventListener("click", () => {

    changeDisplay("not", "inline");
    //old way:
    //document.getElementById("not").style.display = "inline";

    changeDisplay("harold", "block");
    //old way:
    //document.getElementById("harold").style.display = "block";

});