const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Comments belongsTo Post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// Post has many comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
