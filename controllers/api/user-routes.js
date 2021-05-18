const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json(dbUserData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
