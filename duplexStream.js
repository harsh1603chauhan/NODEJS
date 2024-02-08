var fs=require('fs');
var data='Harsh is Writing this code';
var writer=fs.createWriteStream('input.txt');
var reader=fs.createReadStream('input.txt');
writer.write(data,'UTF8');
writer.end();
writer.on('finish',function(){
    console.log("write completed");
});
var data='';
reader.on('data',function(chunk){
    data=chunk;

});
reader.on('end',function(){
    console.log(data.toString());

});
reader.on('error',function(err){
    console.error(err);
});