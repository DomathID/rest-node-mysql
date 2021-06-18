const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

 app.use(bodyParser.json());
 const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'anime_db'
});
conn.connect((err) =>{
  if(err) throw err;
  console.log('Database Connected >_<');
});
app.get('/api/anime',(req, res) => {
  let sql = "SELECT * FROM animeku";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send("Yamete Kudasai !")
  });
      });
  app.get('/api/anime/:id',(req, res) => {
  let sql = "SELECT * FROM animeku WHERE anime_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"response": results}));
   });
});
  app.listen(1337,() =>{
    console.log('Ara Ara ...');
});
