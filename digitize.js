function digitize(n) {
  var arr = n.toString().split('').map(Number);
  return arr
}
console.log(digitize(1234));
