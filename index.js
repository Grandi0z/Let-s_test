const stringLength = (str) => {
    const strLgth = str.length
    if(strLgth >= 1 && strLgth <= 10){
        return str.length
    }
    throw new Error("Check fail : invalid characters count")
}

const reverseString = (str) => {
    const tempoArr = str.split("")
    tempoArr.reverse()
    const newStr = tempoArr.join("")
    return newStr
}

const calculator = {
    a : 1,
    b : 2,
    add:(a,b) => a+b,
    subtract: (a,b) => a-b,
    divide: (a,b) => {
        if(b===0){
            throw new Error("b = 0 : can't divide by 0")
        }
        return a/b
    },
    multiply: (a,b) => a*b
}

const capitalize = (str) => {
    const newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr

}


module.exports = {stringLength, reverseString, calculator, capitalize}
