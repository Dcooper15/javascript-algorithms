//write a function to find the index of a number in an array. If the number does not exist in the array, return -1.


const indexFinder = (num, numberArray) => {
    whereIsIt = numberArray.indexOf(num);
    return whereIsIt;
}


console.log(indexFinder(11, [2, 3, 4, 10]));