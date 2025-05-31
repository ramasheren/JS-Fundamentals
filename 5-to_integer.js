let arg = ProcessingInstruction.argv.slice(2);
arv = number(arg[0]);
if (isNaN(arg)) {
  console.log("Not a number");
}