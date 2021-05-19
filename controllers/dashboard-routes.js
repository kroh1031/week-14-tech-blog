const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("create-post", { layout: "dashboard" });
});
module.exports = router;
