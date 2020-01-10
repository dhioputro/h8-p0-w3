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


