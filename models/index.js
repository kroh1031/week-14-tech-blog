const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Comments belongsTo Post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// Post hasMany Comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

// Post belongsTo User
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Comment belongsTo User
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
