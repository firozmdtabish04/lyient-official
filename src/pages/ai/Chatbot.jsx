import { useMemo, useState } from "react";

const defaultMessages = [
  {
    role: "assistant",
    text: "Hello! I’m your local AI assistant. Ask me anything about planning, coding tips, study help, or just chat!",
  },
];

const localResponses = [
  {
    match: ["hello", "hi", "hey"],
    reply: "Hi there! What can I help you with today?",
  },
  {
    match: ["code", "program", "javascript", "react"],
    reply:
      "If you want help with code, share the details and I’ll give you a local guidance example.",
  },
  {
    match: ["study", "exam", "test", "cgpa"],
    reply:
      "Study smarter by breaking tasks into small goals, and focus on repeating important ideas. Need a study plan?",
  },
  {
    match: ["resume", "cv", "interview"],
    reply:
      "I can help you improve your resume with keywords, structure, and clarity. Tell me your field and experience.",
  },
  {
    match: ["help", "support"],
    reply:
      "I’m here to help. Ask me any question or describe the problem you want to solve.",
  },
  {
    match: ["thank", "thanks"],
    reply: "You’re welcome! If you have another question, I’m ready.",
  },
];

function getLocalReply(message) {
  const lower = message.toLowerCase();

  for (const entry of localResponses) {
    if (entry.match.some((keyword) => lower.includes(keyword))) {
      return entry.reply;
    }
  }

  if (lower.includes("weather") || lower.includes("time")) {
    return "I’m a local assistant, so I can’t fetch live weather or time. But I can help you plan and structure anything else you need.";
  }

  if (lower.includes("joke") || lower.includes("funny")) {
    return "Sure! Why did the developer go broke? Because he used up all his cache. 😄";
  }

  return "That’s interesting. Can you share more details so I can give a better answer?";
}

export default function Chatbot() {
  const [messages, setMessages] = useState(defaultMessages);
  const [inputValue, setInputValue] = useState("");
  const [isSending, setIsSending] = useState(false);

  const recentMessages = useMemo(() => messages.slice(-8), [messages]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMessage = { role: "user", text: trimmed };
    const assistantMessage = {
      role: "assistant",
      text: getLocalReply(trimmed),
    };

    setIsSending(true);
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      setMessages((prev) => [...prev, assistantMessage]);
      setIsSending(false);
    }, 350);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-700 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
        <div className="mb-6 flex flex-col gap-3 rounded-3xl border border-slate-700 bg-slate-950/80 p-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Local AI Chatbot
            </h1>
            <p className="mt-2 max-w-2xl text-slate-400">
              This assistant runs entirely in your browser using local response
              rules. No external AI API is used.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
              <h2 className="text-lg font-medium">Try prompts like</h2>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>• Explain a React hook in simple terms</li>
                <li>• Give me tips for studying for exams</li>
                <li>• Help me write a resume summary</li>
                <li>• Share a short motivational quote</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
              <h2 className="text-lg font-medium">How it works</h2>
              <p className="mt-3 text-slate-300">
                The bot uses local keyword matching and friendly fallback text
                to simulate AI-style responses without calling any external
                service.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {recentMessages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`rounded-3xl px-5 py-4 shadow-sm transition ${
                message.role === "assistant"
                  ? "bg-slate-800 text-slate-100"
                  : "bg-slate-700/80 text-slate-100 self-end"
              }`}
            >
              <div className="mb-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                {message.role === "assistant" ? "Assistant" : "You"}
              </div>
              <p className="whitespace-pre-wrap text-sm leading-7">
                {message.text}
              </p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col gap-4 sm:flex-row"
        >
          <label htmlFor="chat-input" className="sr-only">
            Enter your message
          </label>
          <input
            id="chat-input"
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Type your question or prompt..."
            className="min-h-[56px] flex-1 rounded-3xl border border-slate-700 bg-slate-950/90 px-5 text-sm text-white outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                handleSubmit(event);
              }
            }}
          />
          <button
            type="submit"
            className="min-h-[56px] rounded-3xl bg-cyan-500 px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={!inputValue.trim() || isSending}
          >
            {isSending ? "Thinking..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
