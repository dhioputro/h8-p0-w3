let arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
  
  input.splice(1 , 1, "Roman Alamsyah Elsharawy" );
  input.splice(2 , 1, "Provinsi Bandar Lampung" );  
  input.splice(4, 1, "Pria", "SMA International Metro");

  let convertTanggal = input[3].split('/');

  
  let tglToNum = convertTanggal.map(Number);
  let bulan = ''; //untuk digunakan di switch-case konversi ke bulan

  let joinTanggal = convertTanggal.join('-');
  let sliceNama = input[1].slice(0, 15);

  
  switch (tglToNum[1]) {
    case 1:
      bulan = 'Januari';
      break;
    case 2:
      bulan = 'Februari';
      break;
    case 3:
      bulan = 'Maret';
      break;
    case 4:
      bulan = 'April';
      break;
    case 5:
      bulan = 'Mei';
      break;
    case 6:
      bulan = 'Juni';
      break;
    case 7:
      bulan = 'Juli';
      break;
    case 8:
      bulan = 'Agustus';
      break;
    case 9:
      bulan = 'September';
      break;
    case 10:
      bulan = 'Oktober';
      break;
    case 11:
      bulan = 'November';
      break;
    case 12:
      bulan = 'Desember';
      break;
    default:
      bulan = 'Invalid Month';
  }

  console.log(input);
  console.log(bulan);
  console.log(tglToNum.sort(function(a, b) {return a < b}));
  console.log(joinTanggal);
  return sliceNama;
  
}

console.log(dataHandling2(arr));
