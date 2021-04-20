console.log("Hello World!");

var myName = "Marek";
console.log(myName);
const myClass = "JavaScript for Beginners";
console.log(myClass);
console.log("Hello " + myName);
console.log("Hello" + myName + ", welcome to " + myClass);
document. querySelector("h1")
const header1 = document.querySelector("h1");
console.log(header1);
const links = document.querySelectorAll(".nav-link");
console.log(links);
header1.innerHTML = "Nyima Stole Marek's Poutine";
links.innerHTML = "Nyima";
var classNames = ["Nyima", "Marek", "Moc", "Gauri"];
console.log(classNames.length);
console.log(classNames[0]);
classNames[2] = "Rebecca";
console.log(classNames);
links[0].innerHTML = "Nyima";
header1.classList.add("blue");
header1.classList.remove('blue');
header1.classList.contains('blue');
header1.classList.toggle('blue');

function myFirstFunction() {
  console.log("Hey");
  console.log("This function is working");
  let x = 4;
  let y = 5;
  let sum = x + y;
  console.log(sum)  
}

function timeOfDay() {
  // this function will greet a user depending on the time of day
  let date = new Date();
  let time = date.getHours;
  //let time = 18;
  let greeting = "";
  if (time < 12) {
    greeting = "Good Morning";
  } else  if (time < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  console.log(date);
  console.log(greeting);
}

function timesTable() {
  let x = 0;
  let multiplier = 5;
  while (x <= 10) {
    console.log(x + " X " + multiplier + " = " + (x*multiplier)
    );
    x++; // "incrementer" x=x+1. very common shorthand. adds one to x every single time it runs
  }
}

 function timesTable() {
 // let x = 0 > move it to inside brackets within 'for' conditional statement.
  let multiplier = 5;
  for (let x = 0; x <= 10; x+2) {
    console.log(x + " x " + multiplier + " = " + (x*multiplier));
  //x++ > move it inside brackets within 'for' conditional statement
  }
 }

function timesTable(multiplier) {
    for (let x = 0; x <= 10; x+2) {
    console.log(x + " x " + multiplier + " = " + (x*multiplier));
  }
}

header1.addEventListener(`click`, timeOfDay);
