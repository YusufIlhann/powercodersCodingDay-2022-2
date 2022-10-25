let num = 1234567;
const reversedNum =  parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
console.log(reversedNum);