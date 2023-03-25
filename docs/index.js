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

// Open modal when user clicks on recipe button 
btn2[0].onclick = function() {
    modal[0].style.display = "block";
}

btn2[1].onclick = function() {
    modal[1].style.display = "block";
}

btn2[2].onclick = function() {
    modal[2].style.display = "block";
}

btn2[3].onclick = function() {
    modal[3].style.display = "block";
}

btn2[4].onclick = function() {
    modal[4].style.display = "block";
}
btn2[5].onclick = function() {
    modal[5].style.display = "block";
}



// Close modal when user clicks on the close button
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() {
    modal[1].style.display = "none";
}

span[2].onclick = function() {
    modal[2].style.display = "none";
}

span[3].onclick = function() {
    modal[3].style.display = "none";
}

span[4].onclick = function() {
    modal[4].style.display = "none";
}

span[5].onclick = function() {
    modal[5].style.display = "none";
}