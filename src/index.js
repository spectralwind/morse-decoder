const MORSE_TABLE = {
    '11':     'a',
    '234':   'b',
    '238':   'c',
    '58':    'd',
    '2':      'e',
    '174':   'f',
    '62':    'g',
    '170':   'h',
    '10':     'i',
    '191':   'j',
    '59':    'k',
    '186':   'l',
    '15':     'm',
    '14':     'n',
    '63':    'o',
    '190':   'p',
    '251':   'q',
    '46':    'r',
    '42':    's',
    '3':      't',
    '43':    'u',
    '171':   'v',
    '47':    'w',
    '235':   'x',
    '239':   'y',
    '250':   'z',
    '767':  '1',
    '703':  '2',
    '687':  '3',
    '683':  '4',
    '682':  '5',
    '938':  '6',
    '1002':  '7',
    '1018':  '8',
    '1022':  '9',
    '1023':  '0',
};

function decode(expr) {
  let result = [];
  let transform;
  let stack = [];
  let countStack = 0;

  for(let i = 0; i < expr.length; i += 10) {
    stack.push(expr.slice(i, i + 10));
    if(stack[countStack] !== '**********') {
        transform = parseInt(stack[countStack], 2);
        result.push(MORSE_TABLE[transform]);
    } else { 
        result.push(' ');
    }
    countStack++;
  }
  
  return result.join('');
}

module.exports = {
    decode
}