var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    created       : {
      type        : Date,
      default     : Date.now,
    },
    title         : {
      type        : String,
      default     : '',
      trim        : true,
      required    : 'Title cannot be blank'
    },
    slug          : {
      type        : String,
    },
    content       : {
      type        : String,
      default     : '',
      trim        : true
    },
    author        : {
      name        : String,
      slug        : String,
      URL         : String,
      avatar      : String,
    },

	  },
    excerpt       : {
      type        : String,
      trim        : true,
    },
    comments      : {
      
    }
  //END OF SCHEMA
});

module.exports = mongoose.model('Article', articleSchema);
