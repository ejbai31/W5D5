const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("GIMME A MF NUMBER!", function(answer) {
      let int = parseInt(answer);
      let added = sum + int;
      // console.log(`total sum: ${sum}`);
      numsLeft--;
      addNumbers(added, numsLeft, completionCallback);
    });

  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, function(sum) {
  console.log(`Total Sum: ${sum}`);
  reader.close();
});
