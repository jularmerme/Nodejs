const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbURI =
  'mongodb+srv://jm2force:FtjGqy37NH6ah949@cluster0.rtbclde.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log('connected to db'))
  .catch((err) => console.log(err));

const schema = new mongoose.Schema({
  property_1: Number,
  property_2: String,
});

const Model = mongoose.model('mynotes', schema);
