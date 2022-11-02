// String length comparison

const n1 = "ana";
const n2 = "monica";
const n3 = "lina";

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// this could bin utilities
const descending = (a,b) => a.length > b.length ? -1 : 1;

const items = [n1,n2,n3];

console.log(items.sort(descending).join(", "));
console.log(items.sort().reverse().join(", "));

let first;
let second;
let third;
let result = "";

const compileText = (t1,t2,t3) => {
    return [t1, (t2.length > t3.length
                 ? [t2, t3]
                 : [t3, t2])
           ].flat().join(" ");
}

// here you check if the n1 is the longest?
if (n1.length > n2.length && n1.length > n3.length) {
    result = compileText(n1, n2, n3);
} else if (n2.length > n1.length && n2.length > n3.length) {
    result = compileText(n2, n1, n3);
} else if (n3.length > n1.length && n3.length > n2.length) {
    result = compileText(n3, n1, n2);
}

// console.log(result);
