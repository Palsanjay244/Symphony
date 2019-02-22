const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    //youtube link
    required: true
  },
  name: {
    type: String
     //no required , comment/post exists even after account is deleted
  },
  avatar: {
    type: String
  },
  likes: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    }
  }],
  comments: [{
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    
    text: {
      type: String,
      required: true 
    },


    name: {
      type: String
        },
    avatar: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
