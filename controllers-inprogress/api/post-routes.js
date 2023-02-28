const router = require("express").Router();
const { User, Post } = require("../../models");

// //added this code below to associate a user with any blog post they create
router.get("/create", async (req, res) => {
  const postsData = await Post.findAll({
    include: [User]
  });
  const posts = postsData.map(post => post.get({plain:true}));
  res.render("create-post",{ posts });
//   res.render("create-post",{loggedIn: req.session.loggedIn, posts});
});

module.exports = router;