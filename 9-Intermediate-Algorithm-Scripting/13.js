// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
//
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
        const sqrt = Math.sqrt(num);
        for (let i = 2; i <= sqrt; i++) {
            if (num % i === 0)
                return false;
        }
        return true;
    }

    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i))
            sum += i;
    }
    return sum;
}

console.log(sumPrimes(10))