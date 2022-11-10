//*** */ a) Create an array with the ages. Print the array ***

const agesOfStudents = [20, 35, 27, 44, 24, 32];

console.log("array of ages: " , agesOfStudents);

// b)

const avg = (array) => {
  let sum = 0;
  for (let i = 0; i < agesOfStudents.length; i++) {
    sum += agesOfStudents[i];
  }
  return sum / agesOfStudents.length;
};

console.log("Average age of students: " , avg(agesOfStudents).toFixed(2));
