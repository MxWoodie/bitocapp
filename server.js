const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});