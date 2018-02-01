const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const Database = require('./util/database.js');
const indexRouter = require('./routes/index.js');

app.use(bodyParser.json());

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

const dbConfig = {
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : '',
  database        : 'basic_knit'
};
const db = new Database(dbConfig);

app.use('/api', indexRouter(db));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});