import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";
import printMe from "./print";
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  btn.innerHTML = "Click Me";
  btn.onclick = printMe;

  element.appendChild(myIcon);
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
