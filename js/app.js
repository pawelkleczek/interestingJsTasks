function solution(S) {


    var newString = S.replace(/\d/g, ' ');

	var newerString = newString.replace()

	var array = newString.split(' ').sort(function(a, b) {
		return a.length - b.length;
	});






}



solution('bla0krG8dlsfjkdjskfjdkf;lks7jbjvjlc$fdhhjslR');

function wynik(S, T) {

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

wynik('15:15:00', '15:15:12');
