import "./sass/main.scss";

function sumAll(numArray: number[]) {
  return numArray.reduce((total, curr) => total + curr);
}

console.log(sumAll([1, 2, 3, 4, 5, 10]));