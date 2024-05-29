const http = require("http");
const app = require("./src/app")
const { connectDB } = require("./src/db/connectDB");
require("dotenv").config()

//process.env.PORT = 8000;
//console.log(process.env);

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await connectDB;

  server.listen(PORT, ()=> {
    c.l (`Server running on port ${PORT} ...`)
  });
}

startServer();