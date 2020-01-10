function perkalianUnik(arr){
  var resultArr = [];// variabel untuk result array yang akan di tampilakn

  // loop
  for(var i = 0; i < arr.length; i++){

    var newArr = [];
    for(var j = 0; j < arr.length; j++){        
        newArr.push(arr[j]); 
             
    }
    
    newArr.splice(i, 1);
    var multiply = 1;

    //pengulangan untuk mengkalikan isi dari array newArr yaitu 4 * 6
    for(var k = 0; k < newArr.length; k++ ){
      multiply *= newArr[k];
      
    }

    
    resultArr.push(multiply);//yaitu 4*6
    // console.log(newArr);
  }

return resultArr;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
//console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
//console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
//console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
//console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
