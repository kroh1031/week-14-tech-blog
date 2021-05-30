const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create(req.body, {
      userId: req.session.userId,
    });
    res.json(newComment.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    const allComments = await Comment.findAll({});
    res.json(allComments);
  } catch (err) {}
});

module.exports = router;
