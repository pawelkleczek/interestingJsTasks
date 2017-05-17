//interesting hours

function interestingHours(S, T) {

  var num1 = parseInt(S.replace(/:/g, ''));
  var num2 = parseInt(T.replace(/:/g, ''));
  var numberOfInterestingHours = 0;

  for (var i = num1; i <= num2; i++) {
    var numberOfNumbers = 0;
    for (var j = 0; j <= 9; j++) {

      if (i.toString().indexOf(j) !== -1) {
        numberOfNumbers += 1;
      }
    }
    if (numberOfNumbers <= 2) {
      numberOfInterestingHours += 1;
    }
  }

  console.log(numberOfInterestingHours);
}

interestingHours('15:15:00', '15:15:12');

//Concat nested arrays

var nestedArray = [0, 1, [2, [3]], [4, 5]];

var newArray = nestedArray.reduce(

  function( a, b ) {

	  return a.concat(b)

  }, []
);

console.log(newArray);
