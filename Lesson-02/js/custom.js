"use strict"
let something = "hello people";
let people = {
  u_name: 1,
  u_diffname: 2
};

function myFunction(a,b,c){
  return a+b+c;
}

document.getElementById("heading").innerHTML = something

document.write("hello uche i am from js")

let myRe = /hello/;
let myString = "does this include hello world in it";

if(myRe.test(myString)){
  alert('yes');
}