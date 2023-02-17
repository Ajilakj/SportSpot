const router = require("express").Router();
// const {User, Sport, Post} = require("../models");
const { Sport } = require("../models");
// const authMiddleware = require("../utils/authMiddleware");

// GET login page
router.get("/", async (req, res) => {
  // if (req.session.loggedIn) {
  res.redirect("/home");
//     return;
//   }else {
//     // otherwise, lets user log in
//     res.render("login");
//   }
});

// GET all sports cards
router.get("/home", async (req, res) => {
  const dbSportData = await Sport.findAll();
  const sport = dbSportData.map((sport) =>
    sport.get({ plain: true })
  );
  res.render("homepage", {
    sport
  });
});





// GET Login route
// redirects user to home if already logged in
router.get("/login", (req, res) => {
  // if (req.session.loggedIn) {
  // res.redirect("/home");
  // return;
  // }else {
  // otherwise, lets user log in
  res.render("login");
  // }
});

// router.get("/:id", async (req, res) => {
//   try {
//   // Search the database for a user with an id that matches params
//     const userData = await User.findByPk(id,req.params.id);
//     const user = userData.map((user) =>
//       user.get({ plain: true })
//     );
//     res.render("profile", user);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/profile/:id", async (req, res) => {
//   const userData = await User.findAll({where:
//           {id:req.params.id}});
//   const user = userData.map((name) =>
//     name.get({ plain: true }));
//   console.log(user);
//   res.render("profile", {
//     user
//   });
// });
module.exports = router;