var fs=require("fs");
console.log("Going to write in existing file");
fs.writeFile('input.txt','Chief of Army Staff General Harsh Vardhan Singh Chauhan',function(err){
    if(err){
        return console.error(err);
    }
    console.log("Data written");
    console.log("let's read newly written");
    fs.readFile('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Async read: "+data.toString());
})
    
})