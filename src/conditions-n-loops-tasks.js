/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x) return true;
  if (queen.y === king.y) return true;

  return Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a + b < c || a + c < b || c + b < a) return false;
  if (a === 0 || b === 0 || c === 0) return false;
  return a === b || a === c || b === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let newNum = num;
  while (newNum > 0) {
    if (newNum >= 10) {
      newNum -= 10;
      result += 'X';
    } else if (newNum === 9) {
      newNum -= 9;
      result += 'IX';
    } else if (newNum >= 5) {
      newNum -= 5;
      result += 'V';
    } else if (newNum === 4) {
      newNum -= 4;
      result += 'IV';
    } else if (newNum >= 1) {
      newNum -= 1;
      result += 'I';
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const splited = String(numberStr);
  let result = '';
  for (let i = 0; i < splited.length; i += 1) {
    switch (splited[i]) {
      case '.':
        result += ' ';
        result += 'point';
        break;
      case ',':
        result += ' ';
        result += 'point';
        break;
      case '-':
        result += 'minus';
        break;
      default:
        if (result < 4) result += numbers[Number(splited[i])];
        else {
          result += ' ';
          result += numbers[Number(splited[i])];
        }
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i += 1) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let i = 0;

  while (i < str.length) {
    if (str[i] === letter) {
      return i;
    }
    i += 1;
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let i = 0;
  const newNum = String(num);
  while (i < newNum.length) {
    if (newNum[i] === String(digit)) {
      return true;
    }
    i += 1;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  function getSum(a, b) {
    let sum = 0;
    for (let i = a; i < b; i += 1) {
      sum += arr[i];
    }
    return sum;
  }

  for (let i = 1; i <= arr.length; i += 1) {
    if (getSum(0, i) === getSum(i + 1, arr.length)) {
      return i;
    }
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const arr = [];
  arr.length = size;
  let row = 0;
  let col = 0;
  let rowEnd = size - 1;
  let colEnd = size - 1;
  let value = 1;
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = [];
    arr[i].length = size;
  }
  while (col <= colEnd && row <= rowEnd) {
    for (let i = col; i <= colEnd; i += 1) {
      arr[row][i] = value;
      value += 1;
    }
    row += 1;

    for (let i = row; i <= rowEnd; i += 1) {
      arr[i][colEnd] = value;
      value += 1;
    }
    colEnd -= 1;

    for (let i = colEnd; i >= col; i -= 1) {
      arr[rowEnd][i] = value;
      value += 1;
    }
    rowEnd -= 1;

    for (let i = rowEnd; i >= row; i -= 1) {
      arr[i][col] = value;
      value += 1;
    }
    col += 1;
  }
  return arr;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;
  const arr = matrix;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    let low = 0;
    let high = n - 1;
    while (low < high) {
      const temp = arr[i][low];
      arr[i][low] = arr[i][high];
      arr[i][high] = temp;
      low += 1;
      high -= 1;
    }
  }

  return arr;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const resultArr = arr;
  const init = arr[0];
  let leftArr = [];
  let rightArr = [];

  for (let i = 1; i <= arr.length - 1; i += 1) {
    if (arr[i] < init) {
      leftArr[leftArr.length] = arr[i];
    } else {
      rightArr[rightArr.length] = arr[i];
    }
  }

  leftArr = sortByAsc(leftArr);
  rightArr = sortByAsc(rightArr);

  const leftArrLen = leftArr.length;

  for (let i = 0; i < leftArrLen; i += 1) {
    resultArr[i] = leftArr[i];
  }

  resultArr[leftArrLen] = init;

  for (let i = 0; i < rightArr.length; i += 1) {
    resultArr[leftArrLen + 1 + i] = rightArr[i];
  }

  return resultArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const final = [str];

  for (let i = 0; i < iterations; i += 1) {
    let odd = '';
    let even = '';
    const current = final[final.length - 1];

    for (let j = 0; j < current.length; j += 2) {
      even += current[j];
      odd += current[j + 1];
    }
    const newStr = even + odd;
    if (newStr === str) break;

    final[final.length] = newStr;
  }

  return final[iterations % final.length];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const string = String(number);
  let result = '';
  const storage = [+string[string.length - 1]];

  for (let i = string.length - 2; i >= 0; i -= 1) {
    if (+string[i] < Math.max(...storage)) {
      storage.push(+string[i]);
      storage.sort((a, b) => a - b);

      let index = 0;
      for (index = storage.length - 1; index >= 0; index -= 1) {
        if (storage[index] === +string[i]) {
          index += 1;
          break;
        }
      }

      for (let j = 0; j < i; j += 1) {
        result += string[j];
      }
      result += `${storage[index]}`;
      for (let k = 0; k < storage.length; k += 1) {
        if (k !== index) {
          result += `${storage[k]}`;
        }
      }
      break;
    } else {
      storage.push(+string[i]);
    }
  }
  return +result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
