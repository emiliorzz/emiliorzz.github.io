const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/spidey-swing.png") {
    myImage.setAttribute("src", "images/spidey-swing-02.png");
  } else {
    myImage.setAttribute("src", "images/spidey-swing.png");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Spidey is cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Spidey is cool, ${storedName}`;
}
myButton.addEventListener("click", () => {
  setUserName();
});
