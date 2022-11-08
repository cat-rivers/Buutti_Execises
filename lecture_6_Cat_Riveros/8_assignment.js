// Ternary

const userName = "Cata";
const isInputTrue = (typeof userName === "string" && userName)

const result =
  isInputTrue
        ? `Hello ${userName}!`
        : "Please give me your name!";

console.log(result);
