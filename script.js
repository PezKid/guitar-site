const container = document.querySelector("#container");
const note = document.querySelector("#note");
const strings = Array.from(document.querySelectorAll(".string-name"));

const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];

function getStringText() {
    let checkedBoxes = [];
    for (const str of strings) {
        if (str.checked) {
            checkedBoxes.push(str.value + " string");
        }
    }
    
    if (checkedBoxes.length == 0)
        return "";
    else {
        const index = Math.floor(Math.random() * (checkedBoxes.length));
        return " on the " + checkedBoxes[index];
    }
}

function generateText() {
    const index = Math.round(Math.random() * 11);
    note.textContent = notes[index] + getStringText();
}

const newNoteButton = document.querySelector("button");
newNoteButton.addEventListener("click", () => generateText());