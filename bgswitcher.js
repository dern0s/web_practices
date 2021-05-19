document.querySelector("#switcher").addEventListener("click", () => {
    document.querySelector("body").style.backgroundImage = `linear-gradient(${getRandomColor()}, ${getRandomColor()})`;
})

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}