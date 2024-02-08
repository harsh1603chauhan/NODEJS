var fs=require("fs");
console.log("Going to create Directory /tmp/test");
fs.mkdir('/temp/test',function(err){
    if(err){
        console.log(err);
   }
   console.log("Directory created successfully!");
});