import { useState } from "react";
import { getAIResponse } from "../../services/groq";

function AIAssistant() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAskAI = async () => {
    if (!prompt.trim()) return;

    const userMessage = {
      sender: "user",
      text: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    const result = await getAIResponse(prompt);

    const aiMessage = {
      sender: "ai",
      text: result,
    };

    setMessages((prev) => [...prev, aiMessage]);

    setPrompt("");
    setLoading(false);
  };

  return (
    <div className="mt-8 bg-slate-900 rounded-2xl border border-cyan-500/20 p-8 shadow-xl">

      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        🤖 AI Crowd Assistant
      </h2>

      <div className="bg-slate-950 rounded-xl h-96 overflow-y-auto p-5 mb-6 space-y-4">

        {messages.length === 0 && (
          <p className="text-gray-500 text-center mt-20">
            Ask anything about crowd management...
          </p>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-5 py-4 rounded-2xl whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-cyan-500 text-black"
                  : "bg-slate-800 text-white border border-cyan-500/20"
              }`}
            >
              <strong>
                {msg.sender === "user" ? "👤 You" : "🤖 AI"}
              </strong>

              <br />
              <br />

              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 px-5 py-4 rounded-2xl border border-cyan-500/20 animate-pulse">
              🤖 Thinking...
            </div>
          </div>
        )}

      </div>

      <textarea
        rows="4"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Example: Gate C has heavy crowd. Give recommendations."
        className="w-full bg-slate-800 text-white p-4 rounded-xl border border-slate-700 outline-none resize-none"
      />

      <button
        onClick={handleAskAI}
        className="mt-5 w-full bg-cyan-500 hover:bg-cyan-400 transition duration-300 py-3 rounded-xl font-bold text-lg"
      >
        🚀 Ask AI
      </button>

    </div>
  );
}

export default AIAssistant;