const path = require("path");
const express = require("express");
// const session = require("express-session");
const exphbs = require("express-handlebars");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const passport = require("./config/passport");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 3001;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// Set up sessions with cookies
// const sess = {
//   secret: "Super secret secret",
//   cookie: {
//     // Stored in milliseconds
//     maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// app.use(passport.initialize());
// app.use(passport.session());

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// require("./controllers/api/passport.js")(app)

app.use(routes);
// app.get("/", async (req, res) => {
//     res.render("sport-posts");
//   });
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});