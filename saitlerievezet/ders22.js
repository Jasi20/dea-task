// function replaceVowels(text) {
//     return text.replace(/[a,e,i,o,u,ə,ü,ö,ı]/g, '*');
// }

// let sentence = "Mən proqramlaşdırmanı sevirəm.";
// let result = replaceVowels(sentence);
// console.log(result);

function repeatEmoji(emoji, count) {
    return emoji.repeat(count);
}

console.log(repeatEmoji("🔥", 2)); 
console.log(repeatEmoji("😂", 3));