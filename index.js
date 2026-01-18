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


connectDB().then(() => {

    app.get("/", (req, res) => {
        res.send("AI Prompt Marketplace Backend is running");
    })

    app.use("/api/prompts", promptsRouter);

    // For local development
    if (process.env.NODE_ENV !== 'production') {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    }

})

// Export for Vercel serverless
module.exports = app;
