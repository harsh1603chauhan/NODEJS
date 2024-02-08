const fs=require('fs');
const express=require('express');
let student={
    "name": "Yashwant",
    "age": 20,
    "city": "Vizag",
    "hobby": "watching movies"
}
let data =JSON.stringify(student,null,2);
fs.writeFile('stuedent-3.json',data,(err)=>{
    if(err) throw err;
    console.log('Data written into file');

});