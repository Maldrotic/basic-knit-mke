const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();


const indexRouter = require('./routes/index.js');

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

const pool = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '',
  database        : 'basic_knit'
});
app.use('/api', indexRouter(pool));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});