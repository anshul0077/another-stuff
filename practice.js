let count = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    count++;
  }
}

console.log("Total numbers divisible by 3 between 1 and 50: " + count);
