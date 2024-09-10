const container = document.querySelector("#container");
const note = document.querySelector("#note");
const lowEString = document.querySelector("#low-e-string");
const aString = document.querySelector("#a-string");
const dString = document.querySelector("#d-string");
const gString = document.querySelector("#g-string");
const bString = document.querySelector("#b-string");
const highEString = document.querySelector("#high-e-string");

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function getStringText() {
    let checkedBoxes = [];
    if (lowEString.checked)
        checkedBoxes.push("E string");
    if (aString.checked)
        checkedBoxes.push("A string");
    if (dString.checked)
        checkedBoxes.push("D string");
    if (gString.checked)
        checkedBoxes.push("G string");
    if (bString.checked)
        checkedBoxes.push("B string");
    if (highEString.checked)
        checkedBoxes.push("e string");
    
    if (checkedBoxes.length == 0)
        return "";
    else {
        const index = Math.round(Math.random() * (checkedBoxes.length - 1));
        return " on the " + checkedBoxes[index];
    }
}

function generateText() {
    const index = Math.round(Math.random() * 11);
    note.textContent = notes[index] + getStringText();
}

const newNoteButton = document.querySelector("button");
newNoteButton.addEventListener("click", () => generateText());