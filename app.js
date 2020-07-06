const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname)));

const displayResults = (req, res, next) => {
  res.sendFile(__dirname + "/index.html");
}

const updateAndDisplay = (req, res, next) =>{
  let rawdata = fs.readFileSync('data.json');
  let student = JSON.parse(rawdata);

  for(var i=1;i<=17;i++)
  {
    if(req.body["name"+i] !=="" && student["name"+i] === "")
    {
      student["name"+i] = req.body["name"+i];
    }
  }
  fs.writeFileSync("data.json", JSON.stringify(student), err => { 

    // Checking for errors 
    if (err) throw err;  
    
    console.log("Done writing"); // Success 
});
  res.redirect('/');
}


  var now = new Date();
  var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 51, 0, 0) - now;
  if (millisTill10 < 0) {
    millisTill10 += 86400000; // milliseconds in a day .
  }
  setTimeout(function () {
    let rawdata = fs.readFileSync('data.json');
            let student = JSON.parse(rawdata);
            var i;
            for (i = 1; i <= 17; i++) {
                student["name"+i]="";
            }
            fs.writeFileSync("data.json", JSON.stringify(student), err => { 
              
              // Checking for errors 
              if (err) throw err;  
              
              console.log("Done writing"); // Success 
            });
          }, millisTill10);
          
app.get('/', displayResults);

app.post('/', updateAndDisplay);

app.listen(3000);