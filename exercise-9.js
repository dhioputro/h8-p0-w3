//function cari mean dengan menjumlahkan
//semua value array dan membaginya dengan jumlah isi array
function cariMean2(arr){
  var count = 0;
  var result = []
  for(i = 0; i < arr.length; i++){
    count += arr[i];
  }
  result = Math.round(count/arr.length)

  return result ;
}


// TEST CASES
console.log(cariMean2([1, 2, 3, 4, 5])); // 3
console.log(cariMean2([3, 5, 7, 5, 3])); // 5
console.log(cariMean2([6, 5, 4, 7, 3])); // 5
console.log(cariMean2([1, 3, 3])); // 2
console.log(cariMean2([7, 7, 7, 7, 7])); // 7

