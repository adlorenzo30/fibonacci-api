const express = require("express");
const router = require("./src/router");

// initialization
const app = express();

app.set("port", 8080);
// middlewares
app
  .disable("x-powered-by")
  .use(express.urlencoded({ extended: false }))
  .use(express.json());

// routes
app.use(router);

// Server & services initialization
const server = app.listen(app.get("port"), () => {
  console.log(`Server running on port ${app.get("port")}`);
});

function gracefulExit(signal) {
  console.log(`${signal} signal received.`);
  console.log("Closing http server...");
  server.close(() => {
    console.log("Http server closed.");
  });
}

// catch uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error({ context: { error } }, "uncaughtException error");
  process.exit(1);
});

// catch unhandled rejetions
process.on("unhandledRejection", (error) => {
  console.error({ context: { error } }, "unhandledRejection error");
});

// If the Node process ends, graceful shutdown
process.on("SIGINT", gracefulExit).on("SIGTERM", gracefulExit);
