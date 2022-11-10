const firstTriangle = {name: "first triangle", width: 7.0, length: 3.5};
const secondTriangle = {name: "second triangle", width: 4.3, length: 6.4};
const thirdTriangle = {name: "third triangle", width: 5.5, length: 5.0};

const areaOfTriangle = (triangle) => {
   const area = (triangle.width * triangle.length) / 2;
   return area
};

const firstArea = areaOfTriangle(firstTriangle)
const secondArea = areaOfTriangle(secondTriangle)
const thirdArea =areaOfTriangle(thirdTriangle)

const findBiggestArea = () => {
    if(firstArea > secondArea && firstArea > thirdArea)
    {  
      console.log("first triangle has biggest area!")
    }
    if( secondArea > firstArea && secondArea > thirdArea) 
    { 
      console.log("second triangle has biggets area!")
    }
    if( thirdArea > firstArea && thirdArea > secondArea)  
    { 
      console.log("second triangle has biggets area!")
    }
}
console.log(`area of first triangle is: ${firstArea}`);
console.log(`area of second triangle is: ${secondArea}`);
console.log(`area of third triangle is: ${thirdArea}`);
findBiggestArea()