//This function return true o false if the color is valid - PLEASE DONT MODIFY
function isValidColor(string) {
  const validColor = new Option().style;
  validColor.color = string;
  return validColor.color === string.toLowerCase();
};

// Event Listeners
let element = document.getElementById("element");

// Color Prompt
let userInput = prompt("What color do you want for the hello world part?");

// Use color prompt to change background color
if(isValidColor(userInput)){
  let firstDiv = document.getElementById("bodytag");
  firstDiv.style.backgroundColor = userInput;
} else{
  alert("This color is not valid");
}

// Add an event listener for the mouse enter
element.addEventListener("mouseenter", () => {
  element.innerHTML = "Thank You."
  // element.classList.add("my-class");
  element.classList.toggle("hover-effect");
})

// Add an event listener for the mouse leave
element.addEventListener("mouseleave", () => {
  element.innerHTML = "Mouse Over Me, Please!"
  element.classList.toggle("hover-effect");
})



