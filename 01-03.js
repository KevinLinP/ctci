const urlify = (inputString) => {
  let string = inputString.split('');
  let read = (string.length - 1);
  let write = (string.length - 1);
  let writing = false;

  while (read >= 0) {
    if (!writing) {
      if (string[read] != ' ') {
        writing = true;
      }
    }

    // cannot be combined
    if (writing) {
      if (string[read] == ' ') {
        string[write--] = '0';
        string[write--] = '2';
        string[write--] = '%';
      } else {
        string[write] = string[read];
        write--;
      }
    }
    
    read--;
  }

  return string.join('');
}

console.log(`'${urlify('Mr John Smith    ')}'`);
