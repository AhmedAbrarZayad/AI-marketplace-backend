const express = require('express');
const app = express();
const cors = require("cors");
const promptsRouter = require("./routes/prompts");
const { connectDB } = require("./config/db");


const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
    cors(),
);

// Initialize database connection (don't block)
let dbConnected = false;
connectDB()
    .then(() => {
        console.log("MongoDB connected successfully");
        dbConnected = true;
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });

// Define routes synchronously for Vercel
app.get("/", (req, res) => {
    res.json({ 
        message: "AI Prompt Marketplace Backend is running",
        status: "ok",
        dbConnected: dbConnected
    });
});

app.use("/api/prompts", promptsRouter);

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

// Export for Vercel serverless
module.exports = app;
