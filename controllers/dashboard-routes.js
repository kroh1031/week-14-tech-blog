const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
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
    res.redirect("login");
    res.status(500).json(err);
  }
});

router.get("/new", withAuth, async (req, res) => {
  res.render("create-post", { layout: "dashboard" });
});

router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    if (dbPostData) {
      const post = dbPostData.get({ plain: true });

      res.render("edit-post", { layout: "dashboard", post });
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
