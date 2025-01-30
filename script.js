let grades = [];

function addGrades(){
    let enterGrade = document.getElementById("enterGrade").value;
    let grade = Number(enterGrade);
    let error = document.getElementById("errorMessages");
    error.innerHTML = "";

    if(isNaN(grade) || grade < 0 || grade > 100){
        error.innerHTML = "Kindly enter a valid grade in the range 0 to 100";
        return;
    }
    grades.push(grade);
    displayGrades();
}

function removeGrades(){
    let enterGrade = document.getElementById("enterGrade").value;
    let grade = Number(enterGrade);
    let error= document.getElementById("errorMessages");
    error.innerHTML = "";

    let index = grades.indexOf(grade);
    if(index !== -1){
        grades.splice(index, 1);
        displayGrades();
    } 
    else{
        error.innerHTML = "Required grade not found";
    }
}

function UpdateGrades(){
    let error = document.getElementById("errorMessages");
    error.innerHTML = "";

    let previousGrade = prompt("Enter the grade you wish to update: ");
    if(previousGrade === null || previousGrade.trim() === ""){
        error.innerHTML = "No input provided. Please provide input"
        return;
    }
    previousGrade = Number(previousGrade);
    if(isNaN(previousGrade)){
        error.innerHTML = "Invalid grade entered";
        return;
    }

    let index = grades.indexOf(previousGrade);
    if(index === -1 ){
        error.innerHTML = "Grade not found";
        return;
    }
   let newGrade = prompt("Enter the new grade in the range 0-100: ");
    if(newGrade === null || newGrade.trim() === ""){
        error.innerHTML = "No input provided";
        return;
    }
    newGrade = Number(newGrade);

    if(isNaN(newGrade) || newGrade < 0 || newGrade > 100){
        error.innerHTML = "Invalid grade entered. Enter a valid grade between 0-100"
        return;
    }
    grades[index] = newGrade;
    displayGrades();
}

function showGradeSummary(){
    let summary = document.getElementById("Summary");
    if(grades.length === 0){
        summary.innerHTML = "No grade available";
        return;
    }
    let sumofGrades = grades.reduce((a,b) => a + b, 0);
    let averageofGrades = (sumofGrades / grades.length).toFixed(2);
    let highestGrade = Math.max(...grades);
    let lowestGrade = Math.min(...grades);

    summary.innerHTML = 
        `Average: ${averageofGrades}<br> Highest: ${highestGrade}<br> Lowest: ${lowestGrade}`;
}

function displayGrades(){
    document.getElementById("gradeList").innerHTML = grades.join(", ");
}