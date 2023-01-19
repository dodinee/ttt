const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

const insertY = ["the soup kitchen", "Disneyland", "the White House"];

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  const Xvalue = randomValueFromArray(insertX);
  const Yvalue = randomValueFromArray(insertY);
  const Zvalue = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(":insertx:", Xvalue);
  newStory = newStory.replaceAll(":inserty:", Yvalue);
  newStory = newStory.replaceAll(":insertz:", Zvalue);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);

    newStory = newStory.replaceAll("300", weight);
    newStory = newStory.replaceAll("94", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeColor() {
  document.body.style.backgroundColor =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}

const bt = document.querySelector(".changeColor");
bt.onclick = changeColor;
bt.onfocus = changeColor;
bt.onblur = changeColor;        
window.onkeydown = changeColor;
