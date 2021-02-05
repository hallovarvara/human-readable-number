module.exports = function toReadable(number) {
  if (number === 0) {
    return 'zero';
  }

  const dictionary = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  let stringifiedNumber = number.toString();
  let hundreds = '';

  if (stringifiedNumber.length === 3) {
    hundreds = `${dictionary[stringifiedNumber[0]]} hundred `;
    stringifiedNumber = stringifiedNumber.slice(1);

    if (stringifiedNumber === '00') {
      return hundreds.trim();
    }
  }

  if (dictionary[stringifiedNumber]) {
    return `${hundreds}${dictionary[stringifiedNumber]}`.trim();
  } else {
    const tens = dictionary[stringifiedNumber[0]]
      ? `${dictionary[stringifiedNumber[0] * 10]} `
      : '';

    const units = dictionary[stringifiedNumber[1]];

    return `${hundreds}${tens}${units}`.trim();
  }
};
