const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  age: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  fav_artist: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  experience: [{
    title: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }],
  education: [{
    gname1: {
      type: String,
      required: true
    },
    gname2: {
      type: String,
      required: true
    },
    gname3: {
      type: String,
      required: true
    }
  }],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);