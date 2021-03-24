const express = require("express");
const cors = require("cors");
const fakeRouter = require("./Router");
const PORT = (process.env.PORT = 5000);

const app = express();

// Enable "Access-Control-Allow-Origin"
app.use(cors());
app.options("*", cors());
// Json body parser
app.use(express.json());
// Fake API routes
app.use("/fake", fakeRouter);

// Start server
const start = () => {
  app.listen(PORT, () => {
    console.log(`Serve has running... On port = ${PORT}`);
  });
};

// Run server
start();
