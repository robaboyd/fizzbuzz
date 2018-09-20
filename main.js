//console.log 1-100
// for every multiple of 3 print fizz
//for every multiple of 5 print buzz
// multiples of 3 and 5 will read fizzbuzz

fizzBuzz();

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let word = " ";
    if (i % 3 === 0) {
      word += "fizz";
    }
    if (i % 5 === 0) {
      word += "buzz";
    }
    console.log(i + word);
  }
}
