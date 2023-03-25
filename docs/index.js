const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () =>{
    menu.classList.toggle("hidden");
    });


// Get modal
var modal = document.getElementsByClassName('modal');

// Get modal button
var btn2 = document.getElementsByClassName("recipeCard");


// Get close modal button 
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn2[0].onclick = function() {
    modal[0].style.display = "block";
}

btn2[1].onclick = function() {
    modal[1].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}