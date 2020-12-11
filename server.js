const express = require("express");
const app = express();

// Init Middleware - body Parser
app.use(express.json({ extended: false }));

// Routes
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/jsonpatch"));
app.use("/api", require("./routes/thumbnail"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));