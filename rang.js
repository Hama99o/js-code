const reverseSeq = n => {
  return [n.reverse()];
};

function range(n) {
 var start_number = 1;
 var empty_array = [];
 for (let i = start_number; i <= n; i++) {
   empty_array.push(i);
 }
 return empty_array.reverse()
}

console.log(range(10));
