const router = require("express").Router();
const { Post } = require("../models");

router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: {
        user_id: req.session.userId,
      },
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("all-user-posts", {
      posts,
      loggedIn: req.session.loggedIn,
      layout: "dashboard",
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new", async (req, res) => {
  res.render("create-post", { layout: "dashboard" });
});
module.exports = router;
