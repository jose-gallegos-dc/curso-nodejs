const fs = require('fs');

// const first = fs.readFileSync('./data/first.txt', 'utf-8');

// console.log(first);

// const title = 'este contenido se ha añadido!';

// fs.writeFileSync('./data/third.txt', title, {
//    flag: 'a'
// });   

fs.readFile('./data/first.txt', 'utf-8', (error, data) => {
   if (error) {
      console.log(error);  
   }
   console.log(data);
});