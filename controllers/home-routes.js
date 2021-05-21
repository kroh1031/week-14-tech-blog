const router = require("express").Router();
const { Post, Comment, User } = require("../models");

// Homepage route
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [User],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("all-posts", { posts });
  } catch (err) {}
  res.status(500).json(err);
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// Sign Up route
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("signup");
});

module.exports = router;
