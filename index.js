const server = require("./api/server.js");

//the port should be dynamic so the heroku server can assign a port when deploying
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
