const fizzBuzz= {
    fizzAndBuzz: function(number) {
        if (number % 15 == 0) {
            return "FizzBuzz"
        };
        return number;
    },
    fizz: function(number) {
        if (number % 3 == 0) {
            return "Fizz"
        };
        return number;
    },
    buzz: function(number) {
        if (number % 5 == 0) {
            return "Buzz"
        };
        return number;
    }
}

module.exports = fizzBuzz
