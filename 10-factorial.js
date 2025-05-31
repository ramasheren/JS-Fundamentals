

const arg = process.argv[2];

function factorialBigInt(n) {
  let result = 1n;
  for (let i = BigInt(n); i > 1n; i--) {
    result *= i;
  }
  return result;
}

if (!arg || isNaN(parseInt(arg))) {
  console.log("Missing size");
} else {
  const n = parseInt(arg);
  const fact = factorialBigInt(n);
  console.log(fact.toString());
}
