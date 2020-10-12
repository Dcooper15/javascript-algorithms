
// find the greatest commmon divisor of two numbers

const greatestCommonDivisor = (num1, num2) => {
    const minValue = Math.min(num1, num2);
    const maxValue = Math.max(num1, num2);
    for (let i = minValue; i > 0; i--) {
        
        if ((minValue % i === 0) && (maxValue % i === 0)) {
        return i; }
    }
}

console.log(greatestCommonDivisor(12, 14))

