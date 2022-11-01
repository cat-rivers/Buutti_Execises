// String length comparison

const n1 = "ana";
const n2 = "monica";
const n3 = "lina";

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

console.log(result);
