import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        reply: "Prompt is required.",
      });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content:
                `
You are an AI Crowd Management Assistant for the FIFA World Cup 2026.

Rules:
- Respond only in 4-6 bullet points.
- Keep each bullet short and actionable.
- Focus only on crowd management.
- No greetings or introductions.
- No conclusion.
- Mention gates, security, evacuation, medical teams or traffic if relevant.
`,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.5,
          max_tokens: 500,
        }),
      }
    );

    const data = await response.json();

    console.log("Groq Response:", JSON.stringify(data, null, 2));

    if (!response.ok) {
      return res.status(response.status).json({
        reply: data.error?.message || "Groq API Error",
      });
    }

    res.json({
      reply:
        data.choices?.[0]?.message?.content ||
        "No response received from AI.",
    });
  } catch (error) {
    console.error("Server Error:", error);

    res.status(500).json({
      reply: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});