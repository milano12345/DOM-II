// Your code goes here
//Variable Declarations
const navLink0 = document.querySelector('.nav-link')

const navLink1 = document.getElementsByTagName('a')[1]

const navLink2 = document.getElementsByTagName('a')[2]

const navLink3 = document.getElementsByTagName('a')[3]

const navLink4 = document.getElementsByTagName('a')[4]

const logoHeading = document.querySelector('.logo-heading')

const contentDesistination = document.querySelector('.content-destination')

const button = document.querySelector('button')

const contentSection = document.querySelector('.content-section')
// Color Functions

function red(){
	document.body.style.backgroundColor = "red";
  console.log('The body color is now Red'); 
};

function blue(){
	document.body.style.backgroundColor = "blue";
  console.log('The body color is now Blue'); 
};

function green(){
	document.body.style.backgroundColor = "green";
  console.log('The body color is now Green'); 
};

function purple(){
	document.body.style.backgroundColor = "purple";
  console.log('The body color is now Purple'); 
};

function white(){
	document.body.style.backgroundColor = "white";
  console.log('The body color is now White'); 
};

//Animation OnClick Functions
function content(){
  TweenMax.to('.ani', 4, {left:1200, delay:0});
}

function pic(){
  TweenMax.from('.ani8', 4, {opacity: 0, y: 200,});
}

function text(){
  TweenMax.to('.text', 4, {left:1200, delay:0});
}
//Event Listeners

navLink0.addEventListener('mouseover', red)
navLink1.addEventListener('dblclick', blue)
navLink2.addEventListener('mouseover', green)
navLink3.addEventListener('mouseover', purple)
logoHeading.addEventListener('click', white)
button.addEventListener('click', content)

myBtn.addEventListener('click',() => {    
  pic();
  text();    
});
//TweenMax Amimations

TweenMax.from('.ani2', 4, {opacity: 0, y: 200,})


//Modal JS

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
myBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






