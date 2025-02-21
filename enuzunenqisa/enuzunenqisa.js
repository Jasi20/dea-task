let words = ["javasript", "html", "css","react", "nodejs"]

words.sort((a, b) => a.length - b.length);

let shortest = words[0];
let longest = words[words.length - 1]

console.log(`en uzun soz: ${longest} `);
console.log(`en qisa soz: ${shortest}`);