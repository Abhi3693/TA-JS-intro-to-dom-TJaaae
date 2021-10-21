// Select the h1 element and store it in a variable named heading.
let heading = document.querySelector('h1');

// Check the typeof heading and log it.
console.log(typeof heading);

// Change the color of heading to black.
heading.style.color = "black";

// Select all the hr elements and store it in a variable named allHrs using querySelectorAll
let querySelectorAll = document.querySelectorAll("hr");
/*
Convert the NodeList returned by querySelectorAll to Array using Array.from() or spread operator and store it in allHrsArray

Array.from converts an array kind of data into array so we can use methods like map, reduce

HINT:
let allHrsArray = Array.from(allHrs)
*/
let allHrsArray = Array.from(querySelectorAll);

// Set the border of the all the hr elements to "1px solid tomato"
// for(let hr of allHrsArray){
//   hr.style.border = "1px solid tomato";
// }
allHrsArray.forEach((val)=> val.style.border = "1px solid tomato");


// Change the background of all the hr to "antiquewhite" using for of loop.
// for(let hr of allHrsArray){
//   hr.style.background = "antiquewhite";
// }

allHrsArray.forEach((val)=> val.style.background = "antiquewhite");

// Change the 'border-radius' of all the hr to "5px" using array.
// for(let hr of allHrsArray){
//   hr.style.borderRadius = "5px";
// }
allHrsArray.forEach((val)=> val.style.borderRadius = "5px");


// Change the alignment of the heading(h1) to center.
heading.style.textAlign = "center";

// Change the font size of the heading to 3rem.
heading.style.fontSize = "3rem";

// Change the border of hr with class 'image' to `2px solid purple`.
document.querySelector('.image').style.border = "2px solid purple";

// Hide the box number 17 (last box).
document.body.children[0].children[1].children[16].style.display = "none";

// Change the border of all the hr element from solid to dashed type
// for(let hr of allHrsArray){
//   hr.style.border = "1px dashed tomato";
// }

allHrsArray.forEach((val)=> val.style.border = "1px dashed tomato");


// Create a pragraph element and store it in variable named 'para' using `createElement`
let para = document.createElement("p");

// Change the inner text of para to "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."
para.innerText = "querySelector returns an element you can maupulate but querySelectorAll returns the collection of elements in array kind of structure."

// Remove all the elements from box 1
let rm = document.querySelector(".one").children[0];
rm.remove();
rm = document.querySelector(".one").children[0];
rm.remove();

// Replace all the elements inside box 1 with the para (you created above)
let one = document.querySelector(".one");
one.append(para);

/* Walking the DOM
Do the following after selecting box 16 and storing in variable named box16

  - Access the parentNode // div.archive
  - Access the childNodes //  NodeList(13) [text, hr, text, hr, text, hr, text, hr, text, hr, text, hr, text]
  - Access previousSibling // text
  - Access nextSibling // text
  - Access firstChild // text
  - Access lastChild // text

  - Access previousElementSibling // div.box.fifteen
  - Access nextElementSibling // div.box.seventeen
  - Access firstElementChild // hr
  - Access lastElementChild // hr

  - Focus on the difference between element and node
*/
let box16 = document.querySelector(".sixteen")
  box16.parentNode // div.archive
  box16.childNodes //  NodeList(13) [text, hr, text, hr, text, hr, text, hr, text, hr, text, hr, text]
  box16.previousSibling // text
  box16.nextSibling // text
  box16.firstChild // text
  box16.lastChild //text
  box16.previousElementSibling // div.box.fifteen
  box16.nextElementSibling // div.box.seventeen
  box16.firstElementChild // hr
  box16.lastElementChild // hr

// Select box 2 and append a new paragraph element with content "Append inserts as last child" just after hr element.

let box2 = document.body.children[0].children[1].children[1] //document.querySelector(".two");
let newP = document.createElement("p");
newP.innerText = "Append inserts as last child"
box2.append(newP);

// Select box 3 and prepend a new paragraph element with content "Prepend inserts as first child" just before hr element.

let box3 = document.body.children[0].children[1].children[2]  //document.querySelector(".three");
let newPp = document.createElement("p");
newPp.innerText = "Prepend inserts as last child"
box3.prepend(newPp);

// Change the border of box 4 to '1px solid black'
let box4 = document.body.children[0].children[1].children[3]  //document.querySelector(".four").style.border = '1px solid black'

// Change the border radius of box 5 to 10px.
let box5 = document.body.children[0].children[1].children[4].style.borderRadius = '10px'   //document.querySelector(".five")

// Change the text color of box 6 to black.
let box6 = document.body.children[0].children[1].children[5].style.color = 'black'        //document.querySelector(".six")

// Change the font size of the para inside box 1 to 0.8rem.
box1 = document.querySelector(".one").children[0].style.fontSize = "0.8rem"

// Change the background of all the alternate boxes (1, 3, 5, ....) to aliceblue
let allBoxes =  Array.from(document.body.children[0].children[1].children)
let evenNumber = [] ;
for(let i = 0; i < allBoxes.length; i++){
  if (i % 2 === 0) {
     evenNumber.push(i);
  }
}
for(let i = 0; i < evenNumber.length; i ++){
  console.log(evenNumber[i])
  allBoxes[evenNumber[i]].style.background = "aliceblue"
}

// add a class named "awesome-box" to the box 6 using classList property of DOM element.
box6 = document.querySelector(".six");

box6.classList.add("awesome-box");

// Using the toggle classList property toggle the class `awesome-box` from box 2
box2.classList.toggle("awesome-box")

// Using the remove classList proeprty remove the class `awesome-box` from box 4
box4 = document.querySelector(".four");
box4.classList.remove("awesome-box")

// Change the background of the body to bisque
document.body.style.backgroundColor = "bisque";

// Create a button and store it in a variable named 'btn'
let btn = document.createElement("button");

// textContent of the button should be 'Click Me'
btn.innerText = "click me";

// Change the background of the btn to 'oldlace'
btn.style.backgroundColor = "oldlace";

// Change the font size of the btn to 1rem
btn.style.fontSize = "1rem";

// Change the border of the btn to '1px solid black'
btn.style.border = "1px solid black";

// Add the padding of '0.5rem 1rem' to btn
btn.style.padding = "0.5rem 1rem"

// Append the btn in box number 9
let box9 = document.querySelector(".nine");
box9.append(btn);

// Create a img element with src value `https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80` and store in a variable named imgElm
let imgElm = document.createElement("img");
//imgElm.src = "https://images.unsplash.com/photo-1592500595497-d1f52a40b207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"

// Select the box 7 using class seven
let box7 = document.querySelector(".seven");

// Remove all the elements form box seven
 rm = box7.children[0];
 rm.remove();

 rm = box7.children[0];
 rm.remove();

 rm = box7.children[0];
 rm.remove();

// Append the imgElm to the box no 7
box7.append(imgElm);

// Change the width and height of the image to `100%`

// Select the box 5 using class five
box5 = document.querySelector(".five")

// Create an input element
let input = document.createElement("input");

// Change the placeholder property of the input element to "Enter you email!"
input.setAttribute("placeholder", "Enter your email");

// Append the input element to the box 5 you selected above
box5.append(input);

// Create two anchor (a) element with  the text of `AltCampus` and `Google`
let a = document.createElement("a");
let a1 = document.createElement("a");

a.innerText = "AltCampus"
a1.innerText = "Google"

// Change the href property of the anchor elements to `https://altcampus.school` and `https://google.com`
a.href = "https://altcampus.school";
a1.href = "https://google.com";

// Append both the elements to box 5 you selected above.
box5.append(a, a1);


