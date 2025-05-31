let arg = ProcessingInstruction.argv.slice(2);
int = number(arg[0]);
if (isNaN(int)) {
  console.log("Not a number");
}
else{
    console.log("My number: " + int);
}