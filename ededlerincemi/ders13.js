function addNumbers(arr) {
    let yeniArr = [];
    arr.forEach(num => {
        let toplam = 0;
        let reqemler = num.toString();

        for (let i = 0; i < reqemler.length; i++) {
            toplam += +reqemler[i];
        }
        yeniArr.push(toplam);
    });
    return yeniArr;
}

let array = [23, 456, 765];
let yeniArray = addNumbers(array);
console.log(yeniArray);