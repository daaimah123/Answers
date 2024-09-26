//Create a div
const divOne = document.createElement("div");
divOne.innerHTML = "<h2> Cristina Rodriguez </h2>";
document.body.appendChild(divOne);

//Second task
let ptag = document.createElement("p");
ptag.innerHTML = "I'm living in <strong> Seattle, WA </strong>";
divOne.appendChild(ptag);

// Creating a list - the third task 
const mylist = document.createElement("ul");
let litElement = document.createElement("li");
litElement.innerHTML = "My favorite food is Sushi";
mylist.appendChild(litElement);
divOne.appendChild(mylist);

let img = document.createElement("img");
img.src = "https://images.albertsons-media.com/is/image/ABS/970070363?$ng-ecom-pdp-desktop$&defaultImage=Not_Available";
mylist.appendChild(img);

let momDiv = document.getElementById("FirstDiv");
console.log(momDiv);