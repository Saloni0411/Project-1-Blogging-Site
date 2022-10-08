const mongoose = require("mongoose");
let objectId = mongoose.Schema.Types.ObjectId;

////////////////////// -BLOG SCHEMA- /////////////////

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: 'Blog title is required',
      trim: true
    },
    body: {
      type: String,
      required: 'Blog body is required',
      trim: true
    },
    authorId: {
      type: objectId,
      required: 'Blog Author is required',
      ref: "Author"
    },
    tags: {
      type: String,
      trim: true
    }, 
    category: {
      type: String,
      trim: true,
      required: 'Blog category is required'
    },
    subcategory: {
      type: String,
      trim: true
    },
    isPublished: {
      type: Boolean,
      default: false
    },
    publishedAt: {
      type: Date
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
