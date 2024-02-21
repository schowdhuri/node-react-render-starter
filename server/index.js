const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// serve static files generated by the frontend build process
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// parse JSON bodies
app.use(express.json());

// prefix all API endpoints with `/api`
app.get("/api/ping", (req, res) => {
  res.send("Ok");
});

app.post("/api/greet", (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

if (process.env.NODE_ENV !== "dev") {
  // Catch-All for any request that doesn't match a route
  // falls back to index.html
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
