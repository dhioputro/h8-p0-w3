function targetTerdekat(arr){

  var arrX = [];
  var arrO = [];
  var hasil = 0;

  for (var i = 0; i < arr.length; i++){
    if(arr[i] === 'o'){
      arrO.push(i);
    }else if (arr[i] === 'x') {
      arrX.push(i);
    }
  }


  if(arrO[0] > arrX[0]){
    hasil = arrO[0] - arrX[arrX.length-1];
  }else if(arrO[0] < arrX[0]){
    hasil = arrX[0] - arrO[0];
  }else{
    hasil = 0;

  }
  return hasil;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
