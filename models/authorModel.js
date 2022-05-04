const mongoose = require("mongoose");

/////////////////// -AUTHOR SCHEMA- /////////////////////////////

const authorSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: "First name is required",
      trim: true
    },
    lname: {
      type: String,
      required: 'Last name is required',
      trim: true
    },
    title: {
      type: String,
      enum: ["Mr", "Mrs", "Miss"],
      required: 'title is required'
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
    },
    password: {
      type: String,
      trim: true,
      required: 'Password is required'
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Author", authorSchema); // authors
