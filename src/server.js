const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

// routes

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
