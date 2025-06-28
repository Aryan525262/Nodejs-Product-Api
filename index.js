const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());
app.use("/api/server",require("./routes/server"));
// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});