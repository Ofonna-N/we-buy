const port = process.env.PORT || 8000;

function startServer(app) {
  app.listen(port, () => {
    console.log("listening on port: " + port, "at ", "http://localhost:4000/");
  });
}

module.exports = startServer;
