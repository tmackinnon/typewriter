//Goal - animate the sentence, revealing one character at a time
const sentence = "hello there from lighthouse labs";
//use timer variable
let timer = 0;
//loop through each character
for (const char of sentence) {
  //for each character, print each char after the given time
  setTimeout(() => {
    process.stdout.write(char);
    
  }, timer);
  //increase the timer by 50 every loop so theres a delay between each letter
  timer += 50;
}
// add a new line after all the characters print (use setTimeout so it goes in async queue)
setTimeout(() => {
  console.log();
}, timer);