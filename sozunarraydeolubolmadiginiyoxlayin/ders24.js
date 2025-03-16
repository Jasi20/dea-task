let word1 = prompt("Birinci sözü daxil edin:")
let word2 = prompt("Ikinci sözü daxil edin:")
let word3 = prompt("Üçüncü sözü daxil edin:")

let text = "Mən kitab oxumağı sevirəm. Musiqidə maraqlıdır"

function checkWord(word) {
    if(text.includes(word)) {
        alert(`${word} sözü cümlənin içində var`);
    } else {
        alert(`${word} sözü cümlənin içində yoxdur`);
    }
}

checkWord(word1);
checkWord(word2);
checkWord(word3);