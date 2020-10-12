// write a function to return a letter grade given a grade in integer form.


const gradeStudents = (grade) => {
    
    switch(true) {
        case (grade < 60):
        return 'F';
        break;
        case (grade < 70):
        return 'D';
        break;
        case (grade < 80):
        return 'C';
        break;
        case (grade < 90):
        return 'B';
        break;
        case (grade > 89):
        return 'A';
        break;
        default:
        return "enter valid integer";

    }
}


console.log(gradeStudents(75));