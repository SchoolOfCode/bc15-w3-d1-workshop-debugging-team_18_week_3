function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.toString().length; i++) {
    let digit = number.toString()[i];
    console.log(digit);
    if (digit === "9") {
      count++;
    }
  } return count;
}

console.log(countNumberOfNinesInNumber(9999));