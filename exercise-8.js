function pasanganTerbesar(num){

  let numStr = String(num);
  let start = '';

  for (i = 0; i < (numStr.length-1); i++) {
    if(start < numStr[i] + numStr[i + 1]) {
      start = numStr[i] + numStr[i + 1]
    }
  }

  return start;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99