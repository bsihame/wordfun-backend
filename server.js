// // DEPENDENCIES
const app = require("./app.js");

// // CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;

// LISTEN
app.listen(9000, () => {
  console.log(`🪨 Listening on port ${PORT} 💎 `);
});
