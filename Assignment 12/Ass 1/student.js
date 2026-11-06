
function studentIntroduction(name, course) {
    return `My name is ${name} and I am studying ${course}.`;
}


function calculatePercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

module.exports = {
    studentIntroduction,
    calculatePercentage
};