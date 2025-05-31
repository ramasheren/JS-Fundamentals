let arg = process.argv.slice(2);
arg = parseInt(arg[0]);
if (isNaN(arg)) {
  console.log(1);
}
else{
    console.log(factorial(arg));
}

function factorial(n){
    let result= 1;
    for (let i = n; i != 0; i--){
        result*=n;
    } 
    return result;
}