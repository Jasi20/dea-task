function lastWord(str){
        return str.split(", ").sort().pop()
    }
    const str = "apple, mango, cherry, banana"
    console.log(lastWord(str));
    