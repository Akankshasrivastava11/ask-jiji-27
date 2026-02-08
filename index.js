import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/* ✅ IMPORTANT: middleware to read JSON body */
app.use(express.json());

/* ✅ API route */
app.post("/ask-jiji", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    res.json({
      answer: "Backend is working ✅",
      received: question
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

/* ✅ SERVER STARTS HERE (OUTSIDE ROUTES) */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
