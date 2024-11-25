import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {
    type: string,
    required: [true, "First name is required"],
  },
  lastname: {
    type: string,
    required: [true, "Last name is required"]
  },
  profilePhoto: {
    type: string,
  },
  email: {
    type: string,
    required: [true, "Email is required"]
  },
  password: {
    type: string,
    required: [true, "Last name is required"]
  },
  postCount: {
    type: Number,
    default: 0,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum: ["Admin", "Guest", "Editor"],
  },
  viewedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }
  ],
  active: {
    type: Boolean,
    default: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    }
  ]
}, {
  timestamps: true,
});


export const User = mongoose.model('User', userSchema);
