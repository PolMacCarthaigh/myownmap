var testArray = [ "Liverpool", "are", "the", "best", "team" ];
function checking(str) {
  return str.length;
}

function myMap(array, myMap ){
  arr = [];
  //for (var i = 0; i < str.length; i++ ){
  array.forEach(function (str) {
    arr.push(myMap (str));
  });

  return arr;
}

console.log(myMap( testArray, checking ) );