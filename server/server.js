const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

const Database = require('./util/database.js');
const indexRouter = require('./routes/index.js');

app.use(bodyParser.json());

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

const dbConfig = {
  connectionLimit : 10,
  host            : process.env.RDS_HOSTNAME || process.env.DB_HOST || '127.0.0.1',
  user            : process.env.RDS_USERNAME || process.env.DB_USER || 'root',
  password        : process.env.RDS_PASSWORD || process.env.DB_PASSWORD || '',
  database        : process.env.RDS_DB_NAME || process.env.DB_DATABASE || 'basic_knit',
  port            : process.env.RDS_PORT || process.env.DB_PORT || '3306'
};
const db = new Database(dbConfig);

const localStrategy = require('./strategies/localStrategy')(db);
passport.use('local', localStrategy.localStrategy);


app.use('/api', indexRouter(db));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});