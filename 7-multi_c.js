arg = process.argv.slice(2);
let int = parseInt(arg[0]);
if(isNaN(int)){
    console.log("Missing number of occurrences")
}
else{
    for(let i = 0; i < int; i++){
        console.log("C is fun");
    }
}