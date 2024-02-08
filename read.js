var fs=require("fs");
var buf= new Buffer.alloc(1024);
console.log("Going to open existing file: ");
fs.open('input.txt','r+',(err,fd) => {
    if(err){
        return console.error(err);
    }
    console.log("File opened");
    console.log("Going to read");
    fs.read(fd,buf,0,1024,0,function(err,bytes){
    if(err){
         console.log(err);
    }
    console.log(bytes+" bytes read");
    if(bytes>0){
        console.log(buf.slice(0,bytes).toString());
    }
})
fs.close(fd,function(err){
    if(err){
        console.log(err);
    }
    console.log("File closed Successfully.");
})
})