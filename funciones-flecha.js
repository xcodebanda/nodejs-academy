const checkValues = (first, second) => {
    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error("Must be numbers")
    }
}

const addTwoNumbers = (first, second) => {
    // Returns the sum of two values
    checkValues(first, second)
    return first + second
}

const subtractTwoNumbers = (first, second) => {
    // returns the result of subtracting two numbers
    checkValues(first, second)
    return first - second
}

const divideTwoNumbers = (first, second) => {
    // returns the result of dividing two numbers
    checkValues(first, second)
    if (second === 0) throw new Error("Cannot divide by zero")
    return first / second
}

const multiplyTwoNumbers = (first, second) => {
    // returns the result of multiplying two numbers
    checkValues(first, second)
    return first * second
}

console.log(addTwoNumbers(1, 2))  // 3
console.log(subtractTwoNumbers(1, 2))  // -1
console.log(divideTwoNumbers(2, 0))  // Error
console.log(divideTwoNumbers(2, 1))  // 2
console.log(multiplyTwoNumbers(1, 2))  // 2
