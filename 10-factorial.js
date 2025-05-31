
const arg = parseInt(process.argv[2]);

if (isNaN(arg)) {
  console.log(1);
} else {
  console.log(factorial(arg));
}

function factorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  return result;
}