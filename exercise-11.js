function tentukanDeretAritmatika(arr){

  var indeks2 = 1;
  var arrHasilKurang = [];

  for (var i = 0; i < (arr.length-1); i++){
    //memasukan hasil pengurangan ke dalam array 'arrHasilKurang'
    arrHasilKurang.push(arr[indeks2]-arr[i]);

    indeks2++; 
  }

  indeks2 = 1;

  for (var j = 0; j < (arrHasilKurang.length-1); j++){
    if (arrHasilKurang[j] !== arrHasilKurang[indeks2]){
      return false;
    }
    indeks2++;
  }

  return true;

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false