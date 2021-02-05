var marks = [98, 89, 88, 78, 69, 99, 87];

// for (var i = 0; i < marks.length; i++) {
//     var element = marks[i];
//     console.log(element);
// }

// console.log("outside dhaka");
// console.log("outside chittagong");

// function add(num1, num2){
//     var total = num1 + num2;
//     return total;
// }

// var result1 = add(65, 84);
// console.log(result1);

// console.log("not adding this time");
// console.log("not eating right now");

// var result2 = add(155, 555);
// console.log(result2);

function largestNumber(numbers){
    var larger = numbers[0];
    for (var i = 0; i < numbers.length; i++){
        var element = numbers[i];
        if (element > larger){
            larger = element
        }
    }
    return larger;
}

// var output = largestNumber([45, 55, 65, 99]);
// console.log(output);

var numbers = [45, 55, 65, 69, 89];
var output = largestNumber(numbers);
console.log(output);