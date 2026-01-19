const express = require("express");
const router = express.Router();
const { getDB } = require("../config/db");

// GET all prompts
router.get("/", async (req, res) => {
  try {
    const db = await getDB();
    const prompts = await db.collection("prompts").find({}).toArray();
    res.json(prompts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET trending 5 prompts (MUST be before /:id route)
router.get("/trending/top", async (req, res) => {
    try {
        const db = await getDB();
        const trendingPrompts = await db.collection("prompts")
            .find({})
            .sort({ rating: -1 })
            .limit(5)
            .toArray();
        res.json(trendingPrompts);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET single prompt by ID (MUST be after specific routes)
router.get("/:id", async (req, res) => {
  try {
    const db = await getDB();
    const { ObjectId } = require("mongodb");
    const prompt = await db.collection("prompts").findOne({ _id: new ObjectId(req.params.id) });

    if (!prompt) return res.status(404).json({ message: "Prompt not found" });
    res.json(prompt);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// POST add new prompt
router.post("/add-prompt", async (req, res) => {
    try {
        const db = await getDB();
        const newPrompt = req.body;
        const result = await db.collection("prompts").insertMany(newPrompt);
        res.status(201).json(result);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;
