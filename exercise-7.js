function hitungJumlahKata (kalimat) {
//    let kata = kalimat.split(' ');
//    return kata.length;

var word = '' 
var split = []

//split word
  for(i=0; i< kalimat.length; i++){   
    if(kalimat[i] !== ' ') {
      word += kalimat[i]
      //console.log(word)
    } else {
    split.push(word)
    word = ''
    }
  }
split.push(word)
return split.length
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

