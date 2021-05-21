const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create(req.body);

    // Using express-session and connect-session-sequelize middleware
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      req.session.username = dbUserData.username;

      res.json(dbUserData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    // Checks if the password matches the bcrypted password in User model
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = dbUserData.id;
      req.session.username = dbUserData.username;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
