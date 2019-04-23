// Your code goes here
//Variable Declarations
const navLink0 = document.querySelector('.nav-link')

const navLink1 = document.getElementsByTagName('a')[1]

const navLink2 = document.getElementsByTagName('a')[2]

const navLink3 = document.getElementsByTagName('a')[3]

const navLink4 = document.getElementsByTagName('a')[4]

const logoHeading = document.querySelector('.logo-heading')


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

function func1(event) {
    alert("DIV 1"); 
    event.stopPropagation()
    
}
  
  function func2() {
    alert("DIV 2");
  }


//Event Listeners

navLink0.addEventListener('mouseover', red)
navLink1.addEventListener('dblclick', blue)
navLink2.addEventListener('mouseover', green)
navLink3.addEventListener('mouseover', purple)
logoHeading.addEventListener('click', white)



TweenMax.to()