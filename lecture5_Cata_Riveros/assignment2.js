//a)
let number;
const result1 = 10 + number;

number = null;
const result2 = 10 + number;

/*Result1 = NaN
Result2 = 10

undefined is coerced into a NaN, and number plus NaN = NaN
on the other hand, null is coerced into 0 and 10 + 0 = 10

Before being assigned null, number is of type undefined. */

//b)
const a = true;
const b = false;

const c = a + b; // value is 1
const d = 10 + a; // value is 11
const e = 10 + b; // value is 10

//d and e are different because when true is coerced it becomes 1 (10+1)
//and when false is coerced it becomes 0(10+0)
