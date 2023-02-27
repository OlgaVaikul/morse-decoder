const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here

    let oneWord = expr.split('**********')
    
    let oneLetter = [];
    for (let i = 0; i < oneWord.length; i++ ){
        oneLetter.push(oneWord[i].match(/.{10}/g))
    }
    let morseDecoder = [];
for (let j = 0; j < oneLetter.length; j++) {
    let toMourse = []

    for (let k = 0; k <oneLetter[j].length; k++) {
        toMourse.push(oneLetter[j][k].replace(/10/g,'.').replace(/11/g,'-').replace(/00/g,''))
    }
morseDecoder.push((toMourse.map(i => MORSE_TABLE[i])).join(''))

}
return morseDecoder.join(' ')

}

module.exports = {
    decode
}