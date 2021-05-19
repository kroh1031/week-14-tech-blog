const router = require("express").Router();

// Homepage route
router.get("/", (req, res) => {
  res.render("all-posts");
});

// Login route
router.get("/login", (req, res) => {
  console.log(req.body);
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// Sign Up route
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
