function countSheeps(arrayOfSheep) {
  function a(b) {
      if(b == true) {
        return b;
      }
    }
 arr = arrayOfSheep.filter(a);
 var result = arr.length
   if (result >0){
      return console.log( "There are " + result + " sheeps in total,")
   } else if (result == 0 ){
     return console.log( "There are no sheeps in total,")
   }
}
var array1 = [
  true,  true,  null,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true, 'hi', false, undefined
];

countSheeps(array1) //== 17, "There are 17 sheeps in total")
