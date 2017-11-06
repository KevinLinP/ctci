const hasUniqueChars = (string) => {
  let i, j;

  for (i = 0; i < string.length; i++) {

    for (j = (i + 1); j < string.length; j++) {
      if (string[i] == string[j]) {
        return false;
      }
    }
  }

  return true;
}

console.log(hasUniqueChars('asdsf'));

// hash for lookup if data structures allowed
// sort string, then compare neighbors if input mutation allowed
