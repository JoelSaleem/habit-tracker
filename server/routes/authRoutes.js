const passport = require("passport");

module.exports = server => {
  server.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
      prompt: "select_account"
    })
  );

  server.get(
    "/auth/google/callback*",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/");
    }
  );

  server.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  server.get("/api/current_user", (req, res) => {
    if (req.user) {
      return res.send(req.user);
    }

    res.send({});
  });
};
