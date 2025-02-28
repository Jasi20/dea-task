let numbers = [ 10, 25, 55, 78, 39, 47, 89]
let chosen = numbers.filter(num => num > 50).map(num => num * 3).forEach(num => console.log(num))
