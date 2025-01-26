const express = require('express');
const indexRoutes = require('./routes/index');

const app = express();

// Use the routes from index.js
app.use(indexRoutes);

// Set the port to 1245
const PORT = 1245;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
