function groupAnimals(animals) {
  // you can only write your code here!
  var result = []
  var abjad = 'abcdefghijklmnopqrstuvwxyz'

  for (i = 0; i < abjad.length; i++) {
    var arrSame= []
    for(j = 0; j < animals.length; j++) {
      if (abjad[i] === animals[j][0]) {
        arrSame.push(animals[j])
      } 
      
    }
    if (arrSame.length !== 0) { 
      result.push(arrSame)
    }
  }

  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]



/*
function groupAnimals(animals) {
  // you can only write your code here!
  var result = []
  for(i = 0; i < animals.length; i++){
    var group = []
    var boolean = true
    for(j = 0; j < result.length; j++){
      if(animals[i][0] === result[j][0][0]){
        result[j].push(animals[i])
        boolean = false
      }
    }
  
    if(boolean){
      group.push(animals[i])
      result.push(group)
    }

  }
  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
*/


/*
function groupAnimals(animals){
  var resultHasil = [];
  
// animals.sort(function(a, b){return a[0] > b[0]}); //<<< fungsi keramat

function sortAnimals(animals) {


  
  for(i = 0; i < animals.length; i++) {
    for(j= 0; j < animals.length; j++) {
      if(animals[i][j])

    }
  }
}

  
  var Indeks0 = 0;  
  for (var i = 0; i < animals.length; i++){ 
    if (resultHasil === undefined || resultHasil.length === 0 ){
      resultHasil.push([animals[i]]);
      
    } else if (resultHasil[Indeks0][0][0] === animals[i][0]) {
      resultHasil[Indeks0].push(animals[i]);
      
    } else {
      resultHasil.push([animals[i]]);
      
      Indeks0++; //setelah proses push selesai maka Indeks0 ditambah 1

    }

  }
  //Tampilkan resultay 'resultHasil'
  return resultHasil;

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'] ], ['unta'] ]
*/