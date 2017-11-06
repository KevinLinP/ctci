const isPalindromePermutation = (string) => {
  const chars = {};

  let i;
  for (i = 0; i < string.length; i++) {
    const char = string[i].toLowerCase();

    if (char == ' ') {
      continue;
    } else if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }

  let oddsAllowed = 1;

  const keys = Object.keys(chars);
  for (i = 0; i < keys.length; i++) {
    const key = keys[i]
    const count = chars[key];
    if ((chars[key] % 2) != 0) {
      oddsAllowed--;
      if (oddsAllowed < 0) {
        return false;
      }
    }
  }

  return true;
};


console.log(isPalindromePermutation('Tact Coa'));
