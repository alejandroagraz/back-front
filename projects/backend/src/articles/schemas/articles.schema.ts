import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  story_title: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  story_url: {
    type: String,
    trim: true,
  },
  author: {
    type: String,
    trim: true,
  },
  deleted: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
  },
});
