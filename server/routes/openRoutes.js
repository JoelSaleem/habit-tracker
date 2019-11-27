module.exports = (server, app) => {
  server.get("/opens", (req, res) => {
    return app.render(req, res, "/opens", req.query);
  });

  server.post("/open", (req, res) => {
    console.log(req.body);
  });
};
