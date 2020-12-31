const fizzBuzz = {
    output: [],
    total_numbers: 100,
    start_number: 1,
    fizzbuzz_multiple: 15,
    fizz_multiple: 3,
    buzz_multiple: 5,
    modulo_zero: 0,
    fizzAndBuzz: function(number) {
        if (number % this.fizzbuzz_multiple == this.modulo_zero) {
            return true
        };
        return false
    },
    fizz: function(number) {
        if (number % this.fizz_multiple == this.modulo_zero) {
            return true
        };
        return false;
    },
    buzz: function(number) {
        if (number % this.buzz_multiple == this.modulo_zero) {
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
    },
    run: function() {
        for (i = this.start_number; i < this.total_numbers; i++) {
            result = fizzBuzz.check(i);
            this.output.push(result);
        };
        return this.output
    }
};

console.log(fizzBuzz.run())

module.exports = fizzBuzz