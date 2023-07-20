/*console.log("hello world!");

let images = document.getElementsByTagName("img");
console.log(images);

let anchors = document.getElementsByTagName("a");
console.log(anchors);

let para = document.getElementsByTagName("p");
console.log(para);

let heading = document.getElementById("heading");
console.log(heading);
console.log(heading.innerHTML);
console.log(heading.nodeType);
let content = document.getElementById("content");
content.setAttribute('align', 'right')
let heading = document.getElementById("heading");
heading.innerHTML= "uchesss"*/
let content = document.getElementById("content");
let new_heading = document.createElement('h2');
let newphrase = document.createElement('p');


new_heading.innerHTML = "I am a winner in js";
newphrase.innerHTML = "I am rocking in this new things";

content.appendChild(new_heading);
content.appendChild(newphrase);

let btn = document.getElementById("mtb");
btn.onclick = function()
{
  alert("hello world");
  alert("bye bye");
};