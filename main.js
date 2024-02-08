var fs=require("fs");
console.log("Going to creat the directory");
console.log("/tmp/",function(err,files){
    if(err){
        return console.error(err);
    }
    files.forEach(function(file){
        console.log(file);
    })
})