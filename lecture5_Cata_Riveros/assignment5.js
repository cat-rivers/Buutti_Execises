// a)

const studentAges = [20, 35, 27, 44];
console.log(studentAges);

// b)

const averageStudentAges =
  studentAges.reduce((a, b) => a + b) / studentAges.length;
console.log("average student ages: " + averageStudentAges);
