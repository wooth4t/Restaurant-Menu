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
links[0].innderHTML = "Nyima";
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
