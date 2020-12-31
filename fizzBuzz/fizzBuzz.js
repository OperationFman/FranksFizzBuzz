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
    }
}



module.exports = fizzBuzz