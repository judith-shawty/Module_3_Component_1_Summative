// ===========================================
// FETCH HTML ELEMENTS
// SECTION A
// ===========================================

const runTasksButton = document.getElementById("runTasksButton");
const outputElement = document.querySelector(".output");

// ===========================================
// DATA
// ===========================================

export const marks = [45, 60, 85, 30, 95];

// ===========================================
//SECTION B TASKS
// Complete the functions below.
// Do NOT change the function names.
// ===========================================

// Task 1 
export function addMark() {
    //add 70 to the end of the marks array
    // Return the updated marks array
    addMark.push(70);
}

// Task 2
export function getMarksOver60() {
    // Return marks greater than 60
    return marks.filter(mark => mark > 60);
}

// Task 3
export function increaseMarksBy5() {
    // Return a new array where each mark is increased by 5
    return marks.map(mark => mark + 5);
}

// Task 4
export function getTotalMarks() {
    // Return the total of all marks
    return marks.reduce ((total, mark) => total + mark, 0);
}

// Task 5
export function findFirstMarkOver80() {
    // Return the first mark greater than 80
    return marks.find(mark => mark > 80);
}

// Task 6
export function sortMarksLowestToHighest() {
    // Return marks sorted from lowest to highest
    return marks.slice().sort((a, b) => a - b);
}

// ===========================================
// PROVIDED FUNCTIONS
// DO NOT EDIT
// ===========================================

export function displayResult(taskName, result) {

    const paragraph = document.createElement("p");

    paragraph.textContent = `${taskName}: ${result}`;

    if (outputElement) {
        outputElement.appendChild(paragraph);
    }

    console.log(taskName, result);
}

export function runTasks() {

    if (outputElement) {
        outputElement.innerHTML = "";
    }

    displayResult("Task 1", addMark());
    displayResult("Task 2", getMarksOver60());
    displayResult("Task 3", increaseMarksBy5());
    displayResult("Task 4", getTotalMarks());
    displayResult("Task 5", findFirstMarkOver80());
    displayResult("Task 6", sortMarksLowestToHighest());

}
button.addEventListener("click", runTasks);
// ===========================================
// ADD EVENT LISTENER
// SECTION A 
// ===========================================

runTasksButton