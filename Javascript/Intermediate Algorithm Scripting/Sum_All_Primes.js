// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2.
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// Hints.

// You can use the definition of prime numbers or try learning and implementing your own
//Sieve of Eratosthenes. 

// This problem can be hard if you create your own code to check for primes,
//so don’t feel bad if you use someone’s algorithm for that part.
// Research is an important part of coding!

function sumPrimes(num) {
    /* We loop over all values in our range, adding them to the sum if they are prime.
    Our primality checking function returns false if the target number is divisible by any number
    in between 2 and the square root of the target number.
    
    We only need to check up to the square root because the square root of a number is the largest
    possible unique divisor.*/

    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
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
