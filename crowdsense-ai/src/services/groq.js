const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function getAIResponse(prompt) {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error("Server Error");
    }

    const data = await response.json();

    return data.reply;
  } catch (error) {
    console.error("Groq Error:", error);
    return "Unable to connect to AI server.";
  }
}