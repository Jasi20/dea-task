function findMinMax(arr) {
    if (arr.length === 0) return null;

    const min = Math.min(...arr)
    const max = Math.max(...arr);

    return[min, max];
}

const numbers = [12, 5, 8, 20, 1, 30];
console.log(findMinMax(numbers));