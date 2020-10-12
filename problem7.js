// write a function to reverse a given word.


const reverseWord = (thisword) => {
     const splitString = thisword.split("");
     const reverseString = splitString.reverse();
     const joinString = reverseString.join("");
     return joinString;
}


console.log(reverseWord('frank'));
