let p1 ={
  name: "Uche",
  age: 33,
  score: 100,
  rank: 1
};
console.log(p1.age);
let p2 = {
  name: henz,
  age: 29,
  score: 100,
  rank: 2
};
function playerDetails(){
  console.log(this.name + ", " + this.rank + ", "+ this.score );
}
p1.logDetails = playerDetails;
p2.logDetails = playerDetails;


p1.logDetails();
p2.logDetails();