function cetak(angka) {
   for (i = 1; i <= angka; i++) {
      if (i % 3 == 0) {
         console.log('Frontend ,');
      } else if (i % 5 == 0) {
         console.log('Backend ,');
      } else {
         console.log(i, ' ,');
      }
   }
}

cetak(50);

var temp = [];
function cetak2(angka) {
   for (i = 1; i <= angka; i++) {
      if (i % 3 == 0) {
         console.log('Frontend ,');
         temp.push('frontEnd');
      } else if (i % 5 == 0) {
         console.log('Backend ,');
         temp.push('backend');
      } else {
         console.log(i, ' ,');
         temp.push(i);
      }
   }
}

cetak2(50);
console.log(temp);
