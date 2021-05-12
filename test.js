// const glob = require('glob');

// // const files = glob.sync('./home/*/*.js');
// const files = glob.sync('./home/[ab].js');

// console.log('files', files);

// function toThousands(num) {
//   return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
// }

// var num = 1000000

// console.log(toThousands(num));
var arr = ["45", "54", "75", "50", "52", "55", "56", "58", "60", "62", "64", "67", "68", "69", "71"]
var arr1 = ['71', '50', '60', '68', '69', '58', '56', '75', '54', '45', '64', '52', '55', '67', '62']
var a = ''
for (let i = 0; i < arr.length; i++) {
  if (!arr1.includes(arr[i])) {
    a = arr[i]
    break
  }
}
console.log(arr.length)
console.log(arr1.length)
console.log('a', a);