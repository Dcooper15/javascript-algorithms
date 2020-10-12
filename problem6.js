//write a function that takes a number and returns all prime factors of that number


const primeReturner = (num) => {
    primeNum = [];
    
    for (let i = 2; i < num; i++) {
        
        if (num % i == 0 && i % 2 !== 0 && num % 5 !== 0 && num % 9 !== 0  && num % 7 !== 0 || i == 2 && num % 2 == 0 || i == 3 && num % 3 == 0 || i == 7 && num % 7 == 0) {
            primeNum.push(i);
        }
    }
    return primeNum;
}


console.log(primeReturner(56));

//however, without using a function including nested for loops, this will only catch nums up to 241, 242 will return 121.