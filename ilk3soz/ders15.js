function first3thwords(sentence){
    return sentence.split(" ").slice(0, 3).join(", ");
}
const sentence = "Javascript is a powerful language"
console.log(first3thwords(sentence));