const colorPicker = document.querySelector("#color");
function startUp() {

    colorPicker.addEventListener("change", update, false);
    colorPicker.select();
}
function update(event) {
    document.querySelector("form").style.backgroundColor = event.target.value;
}
window.addEventListener("load", startUp, false);

const pee = document.querySelector("#pee");

fetch("http://localhost:4000/users")
    .then(res => res.json())
    .then(function (data) {
        console.log("we in?");
        pee.innerHTML = "<ul>";
        data.forEach(element => {
            pee.innerHTML += "<li class='success'> User Name: " + element.name + ", User Email: " + element.email + "</li> ";
        });
        pee.innerHTML += "</ul>";
    })
    .catch(err => {
        pee.innerHTML = "<p class='fail'>Sorry but things went wrong, this is the output: " + err + "</p>";
    });