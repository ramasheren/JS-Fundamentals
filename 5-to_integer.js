let arg = process.argv.slice(2);
let int = parseInt(arg[0]);
if (isNaN(int)) {
  console.log("Not a number");
}
else{
    console.log("My number: " + int);
}