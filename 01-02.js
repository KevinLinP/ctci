
const isPermutationHash = (stringA, stringB) => {
  if (stringA.length != stringB.length) {
    return false;
  }

  chars = {};

  let i = 0;
  for (i = 0; i < stringA.length; i++) {
    const char = stringA[i];
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char] += 1;
    }
  }

  for (i = 0; i < stringB.length; i++) {
    const char = stringB[i];
    if (!chars[char]) {
      return false;
    } else if (chars[char] == 1) {
      delete chars[char]; // actually not needed if strings are equal length
    } else {
      chars[char] -= 1;
    }
  }

  return (Object.keys(chars).length == 0);
};

console.log(isPermutationHash('asdfasdfasdf', 'asdffdsaasdf'));
