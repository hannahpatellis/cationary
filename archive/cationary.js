const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 8000;

const app = express();

const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/cationary';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`🌎 Cationary Server running on port ${PORT}`);
});