//*** */ a) Create an array with the ages. Print the array ***

const agesOfStudents = [20, 35, 27, 44, 24, 32];

console.log(
  "array of ages: " ,
  agesOfStudents
);

// b) ***** Average age of students with loop

const avg = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

console.log(
  "Average age of students: " +
  avg(agesOfStudents).toFixed(2)
);


