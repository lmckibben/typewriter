const sentence = "hello there from lighthouse labs";
let timer = 0;
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
    i++
  }, timer)
  timer += 50;
}