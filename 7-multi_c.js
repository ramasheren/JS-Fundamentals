arg = process.argv.slice(2);
arg = parseInt(arg[0]);
if(isNaN(arg)){
    console.log("Missing number of occurrences")
}
else{
    for(let i = 0; i < arg; i++){
        console.log("C is fun");
    }
}