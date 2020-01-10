function palindrome(kata) {
  let hasil = '';
  for (i = 1; i <= kata.length; i++){
    hasil += kata[kata.length - i];
  }
  return hasil === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false