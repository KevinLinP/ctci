const stringCompression = (inputString) => {
  let builder = [];

  let i;
  let lastChar = inputString[0];
  let charCount = 1;

  for (i = 1; i < inputString.length; i++) {
    const char = inputString[i];

    if (char == lastChar) {
      charCount++;
    } else {
      builder.push(lastChar);
      builder.push(charCount.toString());

      lastChar = char;
      charCount = 1;
    }
  }

  builder.push(lastChar);
  builder.push(charCount.toString());

  const compressedString = builder.join('');
  if (compressedString.length < inputString.length) {
    return compressedString;
  } else {
    return inputString;
  }
};

console.log(stringCompression('aabcccccaaa'));
