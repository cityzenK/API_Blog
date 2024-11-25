import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Post title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Post description is required"],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Post category is required"],
  },
  numView: [
    {
      type: mongoose.Schema.types.ObjectId,
      ref: "User",
    }
  ],
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  dislikes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Post Author is required"],
  },
  photo: {
    type: String,
    required: [true, "Post Image is required"],
  }
}, {
  timestamps: true,
});

export const Post = mongoose.model('Post', PostSchema);
