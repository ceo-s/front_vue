// var compose = function (functions) {
//   return function (x) {
//     // functions
//     [].reduce(x, y)
//   };
// };

[1, 3, 5, 7].reduce((prev, curr) => {
  console.log(prev, curr);
  let a = prev + curr;
  console.log("AUE?");
  console.log(a);
  return a;
});
