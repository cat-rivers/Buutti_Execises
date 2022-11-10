const firstTriangle = {name: "first triangle", width: 7.0, length: 3.5};
const secondTriangle = {name: "second triangle", width: 4.3, length: 6.4};
const thirdTriangle = {name: "third triangle", width: 5.5, length: 5.0};

const areaOfTriangle = (triangle) => {
  triangle.area = (triangle.width * triangle.length) / 2;
  return triangle.area;
};

console.log(`area of first triangle is: ${areaOfTriangle(firstTriangle)}`);
console.log(`area of second triangle is: ${areaOfTriangle(secondTriangle)}`);
console.log(`area of third triangle is: ${areaOfTriangle(thirdTriangle)}`);
