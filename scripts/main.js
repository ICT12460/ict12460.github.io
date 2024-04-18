const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/titelbild.jpg") {
    myImage.setAttribute("src", "images/titelbild2.jpg");
  } else {
    myImage.setAttribute("src", "images/titelbild.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Herzlich Willkommen, ${myName}!`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Herzlich Willkommen, ${storedName}!`;
}
myButton.onclick = () => {
  setUserName();
};
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Herzlich Willkommen, ${myName}!`;
  }
}
