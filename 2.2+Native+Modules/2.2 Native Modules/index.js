const fs = require('fs');

fs.writeFile("msg5.txt","hey",(err)=>{
  if (err) throw err;
  console.log("yes");
});


fs.readFile('msg5.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});