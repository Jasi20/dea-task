let prices = [15, 20, 35, 40, 50, 60];
let sum = 0;

for (let i = 0; i < prices.length; i++){
    sum += prices[i]
}

let average = Math.round(sum / prices.length)
console.log(average);