routes/aiRoute.js

const express = require("express");
const router = express.Router();

router.post("/chat", async (req, res) => {
  const { message } = req.body;
  console.log("REQ BODY:", message);

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "user", content: message }
          ]
        })
      }
    );

    const data = await response.json();

    res.json({
      reply: data.choices[0].message.content
    });
  } catch (err) {
    console.error("GROQ ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;