const studentList = document.getElementById("appList");
const nextFromList = document.getElementById("upNext");
const mainButton = document.getElementById("nextButton");

let currentStudents = [" Taryn", " Peter", " Kimberlyn", " Aden", " Xavier", " Dina"];

studentList.innerText = currentStudents;

function SelectStudent(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //both max and min are inclusive
} 

mainButton.addEventListener('click', () => {
    let selectedStudent = SelectStudent(0, currentStudents.length-1);
    nextFromList.innerText = currentStudents[selectedStudent];
    console.log(selectedStudent);
    currentStudents.splice(selectedStudent, 1);
    studentList.innerText = currentStudents;
    if(nextFromList.innerText == "undefined"){
        nextFromList.innerText = "Done!";
    }
});