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

//Update records

var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};

// Keep a copy of the collection for tests

var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {

  if (prop !== 'tracks' && value !== '') {
	  collection[id][prop] = value;
  } else if (prop === 'tracks' && collection[id][prop] === undefined) {
	  collection[id][prop] = [];
	  collection[id][prop].push(value);
  } else if (prop === 'tracks' && value !== '') {
	  collection[id][prop].push(value);
  } else if (value === '') {
	  delete collection[id][prop];
  }


  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

// Interesting ES6 template literals
function tag(bryk, ...values) {
	if(values[0] < 20) {
		values[1] = 'awake';
	} else {
		values[1] = 'sleepy';
	}
	return `${bryk[0]}${values[0]}${bryk[1]}${values[1]}`
}

let message = tag`It's ${new Date().getHours()}, and I'm ${''}`;

console.log(message);


// New task
// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
//
// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

function symDif(something) {

	let args = [].slice.call(arguments);

	return args.reduce(function(a,b) {

			b.filter((e,i,a) => {
				if (a.lastIndexOf(e) != i) {
					a.splice(i, 1);
					return;
    			}
			});

		return a.concat(b.filter(function(e, i, a) {
			if (a.indexOf(e) != -1)
			{
				a.splice(a.indexOf(e), 1);
				return;
			} else {
				return e;
			}
			})
		);
	}, []);
}

console.log(symDif([1, 2, 3], [5, 2, 1, 4], [4, 3, 2]));

var c = [1,1,2,2,2,3,4,4,4,4,4,4,5];
var g = c.filter((e, i, a) => i === a.indexOf(e));
console.log(g);

/*
Exact Change

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object
*/

function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
