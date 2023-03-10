const router = require("express").Router();
const userRoutes = require("./user-routes");
// const passportRoutes = require("./passport");


// const createUserRoutes=require("./create-user");
// const blogPostRoutes =require("./blogpost-routes");
const SportRoutes =require("./sport-routes");
const PostRoutes =require("./post-routes");
// const commentRoutes = require("./comment-routes");

router.use("/profile", userRoutes);
// router.use("/", passportRoutes);


// router.use("/profile", createUserRoutes);

// router.use("/blogs", blogPostRoutes);

router.use("/sport", SportRoutes);
router.use("/post", PostRoutes);
// router.use("/comment", commentRoutes);

module.exports = router;
