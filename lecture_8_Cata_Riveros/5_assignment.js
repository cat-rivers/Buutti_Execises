

const triangles = [
  {name: "first triangle", width: 7.0, length: 3.5},
  {name: "second triangle", width: 4.3, length: 6.4},
  {name: "third triangle", width: 5.5, length: 5.0},
];

// ******* Version a  ********************************

function versionA () { 
  
  const areaOfTriangles = (object) => {
  let result;
  for (let i = 0; i < object.length; i++) {
    result = (object[i].width * object[i].length) / 2;
    object[i].area = result;
  }
  return result;
};

areaOfTriangles(triangles);

console.log("Area of first triangle: " + triangles[0].area);
console.log("Area of second triangle: " + triangles[1].area);
console.log("Area of third triangle: " + triangles[2].area);

}

versionA()

//************ Extra ************************

const biggestTriangle = triangles.reduce((a, b) => {
  return a.area > b.area ? a : b;
});

console.log(biggestTriangle.name + " has the biggest area!");

// **************** Version B ******************

function versionB () {
  
  const areaOfTriangle = (triangle) => {
    triangle.area = (triangle.width * triangle.length) / 2;
    return triangle.area;
  };
  
  console.log("first triangle: " + areaOfTriangle(triangles[0]))
  console.log("second triangle: " + areaOfTriangle(triangles[1]))
  console.log("third triangle: " + areaOfTriangle(triangles[2]))
  
}

versionB()

