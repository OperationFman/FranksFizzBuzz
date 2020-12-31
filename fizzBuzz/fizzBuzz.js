var total_numbers = 100
var start_number = 1
const fizzBuzz = {
    fizzAndBuzz: function(number) {
        if (number % 15 == 0) {
            return true
        };
        return false
    },
    fizz: function(number) {
        if (number % 3 == 0) {
            return true
        };
        return false;
    },
    buzz: function(number) {
        if (number % 5 == 0) {
            return true
        };
        return false;
    },
    check: function(number) {
        if (this.fizzAndBuzz(number) == true) {
            return "FizzBuzz"
        } else if (this.fizz(number) == true) {
            return "Fizz"
        } else if (this.buzz(number) == true) {
            return "Buzz"
        } else {
            return number
        };
    }
};

function runFizzBuzz() {
    for (i = start_number; i < total_numbers; i++) {
        result = fizzBuzz.check(i);
        console.log(result);
    };
};

module.exports = fizzBuzz