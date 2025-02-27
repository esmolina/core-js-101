/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result = '';
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      result = 'FizzBuzz';
      return result;
    }
    result = 'Fizz';
    return result;
  }
  if (num % 5 === 0) {
    result = 'Buzz';
    return result;
  }

  result = num;
  return result;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */

function getFactorial(n) {
  let result = n;
  for (let i = n - 1; i > 0; i -= 1) {
    result *= i;
  }
  return result;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let result = 0;
  for (let i = n1; i <= n2; i += 1) {
    result += i;
  }
  return result;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
// function isTriangle(/* a, b, c */) {
//   throw new Error('Not implemented');
// }

function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }
  return false;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
// function doRectanglesOverlap(/* rect1, rect2 */) {
//   throw new Error('Not implemented');
// }

function doRectanglesOverlap(rect1, rect2) {
  const upperLTop1 = rect1.top;
  const lowerLTop1 = rect1.top + rect1.height;

  const upperLTop2 = rect2.top;
  const lowerLTop2 = rect2.top + rect2.height;


  const rightSide1 = rect1.left + rect1.width;
  const rightSide2 = rect2.left + rect2.width;

  if (
    (upperLTop1 >= upperLTop2 && upperLTop1 <= lowerLTop2
      && rect1.left >= rect2.left && rect1.left <= rightSide2)
    || (upperLTop1 >= upperLTop2 && upperLTop1 <= lowerLTop2
      && rightSide1 >= rect2.left && rightSide1 <= rightSide2)
    || (lowerLTop1 >= upperLTop2 && lowerLTop1 <= lowerLTop2
      && rect1.left >= rect2.left && rect1.left <= rightSide2)
    || (lowerLTop1 >= upperLTop2 && lowerLTop1 <= lowerLTop2
      && rightSide1 >= rect2.left && rightSide1 <= rightSide2)
    || (upperLTop1 <= upperLTop2 && lowerLTop1 >= lowerLTop2
      && rect1.left <= rect2.left && rightSide1 >= rightSide2)
  ) { return true; }
  return false;
}

// Number.isnan

/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
// function isInsideCircle(/* circle, point */) {
//   throw new Error('Not implemented');
// }
function isInsideCircle(circle, point) {
  const circleX = circle.center.x;
  const circleY = circle.center.y;
  const circleRadius = circle.radius;

  if (
    ((point.x - circleX) ** 2 + (point.y - circleY) ** 2) < circleRadius ** 2
  ) {
    return true;
  }
  return false;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    if (str.indexOf(symbol) === i && str.indexOf(symbol, i + 1) === -1) {
      return symbol;
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const result = [];
  if (isStartIncluded) {
    result.push('[');
  } else { result.push('('); }
  if (a < b) {
    result.push(a);
    result.push(', ');
    result.push(b);
  } else {
    result.push(b);
    result.push(', ');
    result.push(a);
  }
  if (isEndIncluded) {
    result.push(']');
  } else { result.push(')'); }
  return result.join('');
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  const result = [];
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    result.unshift(symbol);
  }
  return result.join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  const result = [];
  const str = num.toString();
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    result.unshift(symbol);
  }
  const strResult = result.join('');
  return parseInt(strResult, 10);
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
// function isCreditCardNumber(/* ccn */) {
//   throw new Error('Not implemented');
// }

function isCreditCardNumber(ccn) {
  function isBig(x) {
    if (x * 2 > 9) {
      return (x * 2 - 10 + 1);
    }
    return x * 2;
  }

  const str = ccn.toString();
  let result = 0;
  for (let i = str.length - 1; i >= 0; i -= 2) {
    const num = parseInt(str[i], 10);
    result += num;
  }
  for (let i = str.length - 2; i >= 0; i -= 2) {
    const num = parseInt(str[i], 10);
    result += isBig(num);
  }
  if (result % 10 === 0) {
    return true;
  }
  return false;
}


/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  let result;
  if (num > 9) {
    const str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i += 1) {
      const element = parseInt(str[i], 10);
      sum += element;
    }
    result = sum;
    return getDigitalRoot(result);
  }
  result = num;

  return result;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */

// function isBracketsBalanced(/* str */) {
//   throw new Error('Not implemented');
// }


function isBracketsBalanced(str) {
  const result = [];
  const openPatterns = ['{', '[', '(', '<'];
  const closePatterns = ['}', ']', ')', '>'];
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    if (openPatterns.indexOf(symbol) !== -1) {
      result.push(symbol);
    }
    if (closePatterns.indexOf(symbol) !== -1) {
      const lastMember = result.pop();
      const indexOfLastMember = openPatterns.indexOf(lastMember);
      const indexOfCompare = closePatterns.indexOf(symbol);
      if (indexOfLastMember !== indexOfCompare) {
        return false;
      }
    }
  }
  if (result.length !== 0) {
    return false;
  }
  return true;
}

// function isBracketsBalanced(str) {
//   const result = {
//     '{': 0,
//     '[': 0,
//     '(': 0,
//     '<': 0,
//     '}': 0,
//     ']': 0,
//     ')': 0,
//     '>': 0,
//   };
//   for (let i = 0; i < str.length; i += 1) {
//     const keyResult = str[i];
//     result[keyResult] += 1;
//   }
//   if (result['{'] === result['}'] && result['['] === result[']']
//     && result['('] === result[')'] && result['<'] === result['>']) {
//     return true;
//   }
//   return false;
// }

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
// function toNaryString(/* num, n */) {
//   throw new Error('Not implemented');
// }

function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(/* pathes */) {
  throw new Error('Not implemented');
}

// function getCommonDirectoryPath(pathes) {
//   const firstPath = pathes[0];
//   const secondPath = pathes[1]
//   const firstPathComponents = firstPath.split('/');
//   const secondPathComponents = secondPath.split('/');
//   let result = []
//   for (let i = 0; i < firstPathComponents.length; i +=1) {
//     if
//   }
// }

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(/* m1, m2 */) {
  throw new Error('Not implemented');
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(/* position */) {
  throw new Error('Not implemented');
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
