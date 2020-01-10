function tentukanDeretGeometri(arr){


  var arrHasilBagi = [];
  var indeks2 = 1;
  for (var i = 0; i < (arr.length-1); i++){
    arrHasilBagi.push(arr[indeks2]/arr[i]);
    indeks2++;
  }

  var afterTambah = 0;


  for (var j = 0; j < arrHasilBagi.length; j++){
    afterTambah += arrHasilBagi[j];

  }

  var selisihKali = afterTambah / arrHasilBagi.length;

  indeks2 = 1;

  for (var k = 0; k < (arr.length-1); k++){
    if(arr[k]*selisihKali !== arr[indeks2]){
      return false;
    }
    indeks2++;
  }

  return true;

}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false


/* Function lebih simpel tanpa mengkalikan lagi
function tentukanDeretGeometri(arr){
  var arrHasil = [];
  var Indeks1 = 1;
  for (var i = 0; i < (arr.length-1); i++){
    arrHasil.push(arr[Indeks1]/arr[i]);
    Indeks1++;
  }
  Indeks1 = 1;
  for (var j = 0; j < (arrHasil.length-1); j++){
    if(arrHasil[j] !== arrHasil[Indeks1]){
      return false;
    }
  }
  return true;
}
*/