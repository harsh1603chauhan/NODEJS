var fs=require("fs");
console.log("going to open file: ");
fs.readFile("./text.txt", "utf-8" ,(err,data)=>{
    if(err){
        console.log(error);
    }else{
        console.log(data);
    }
})