// a)
const person1Age = 15;
const person2Age = 24;

const isFirstPersonOlder = person1Age > person2Age;
console.log(isFirstPersonOlder); //Prints false

//b) Its a Boolean

// c) Calculate average, print wether first class got higher average

const class1 = [9, 6, 9];
const averageClass1 = class1.reduce((a, b) => a + b) / class1.length;
const class2 = [7, 10, 5];
const averageClass2 = class2.reduce((a, b) => a + b) / class2.length;

if (averageClass1 > averageClass2) {
  console.log("Class 1 has higher average score than class 2");
}
