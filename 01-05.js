const oneAway = (stringA, stringB) => {
  let i;
  const splitStringA = stringA.split('');
  
  for (i = 0; i < stringA.length; i++) {
    if (stringA[i] != stringB[i]) {
      let del = Array.from(splitStringA);
      del.splice(i, 1);

      let insert = Array.from(splitStringA);
      insert.splice(i, 0, stringB[i]); // acc. put stringA first

      let change = Array.from(splitStringA);
      change.splice(i, 1, stringB[i]);

      valid = [
        del.join(''),
        insert.join(''),
        change.join('')
      ];

      console.log(valid);

      return valid.includes(stringB);
    }
  }

  return true;
};

const inputs = [
  ['pale', 'ple'],
  ['pales', 'pale'],
  ['pale', 'bale'],
  ['pale', 'bake']
]

for (let args of inputs) {
  console.log(`${args[0]} ${args[1]}: ${oneAway(args[0], args[1])}`);
}
