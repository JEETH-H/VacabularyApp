const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");


//this will assign available port number to run the application
const port = process.env.PORT || 3000;


const DB = "mongodb://localhost:27017/vocabularyApp";

//Connecting to the database returns "not connected" if connection is unsucessful
mongoose
  .connect(DB, {
    //used to remove depreciation errors
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("not connected"));

//defining the structure of the document
const newWords = new mongoose.Schema({
  word: {
    type: String,
  },
});

//creating the collections
const Words = new mongoose.model("Vocabularyapp", newWords);

const wordDocuments = async () => {
  try {
    //adding data to the document

    const postWords = new Words({
      word: "hello",
    });

    const result = await postWords.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

wordDocuments();


