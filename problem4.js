// take a word and turn it into a word in pig latin

const vowelArr = ['a', 'e', 'i', 'o', 'u'];

const pigLatin = (checkWord) => {
    if (vowelArr.includes(checkWord[0])) {
        return checkWord + 'way';
    }
    for (let i = 1; i < checkWord.length; i++) {
        if (vowelArr.includes(checkWord[i])) {
            return checkWord.substring(i, checkWord.length) + checkWord.substring(0, i) + 'ay';
        } 
    }
    
}


console.log(pigLatin('eagle'));