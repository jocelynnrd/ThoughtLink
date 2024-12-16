const mongoose = require('mongoose'); // Connects to MongoDB

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connect('mongodb+srv://jocelynnrrdd:<gabbyjocelyn21A!>@cluster0.q2lzi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = mongoose.connection; 
