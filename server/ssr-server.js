const express = require("express");
const next = require("next");
const passport = require("passport");
const cookieSession = require("cookie-session");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev, quiet: false });
const handle = app.getRequestHandler();

const mongoose = require("mongoose");
const keys = require("../config/keys");
mongoose.connect(keys.mongoURI);

require("./models/User");
require("./services/passport");

app.prepare().then(() => {
  const server = express();

  server.use(
    cookieSession({
      maxAge: 1 * 1000 * 60 * 60 * 24 * 30,
      keys: [keys.cookieKey]
    })
  );

  server.use(passport.initialize());
  server.use(passport.session());

  require("./routes/authRoutes")(server);
  require("./routes/openRoutes")(server, app);

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("*", (req, res) => {
    return handle(req, res, (req.params || {})['0'], req.query);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
