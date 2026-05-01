import { useState } from "react";

export default function AI() {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([

    {

      role: "assistant",

      content:

        "I’m here with you. You don’t have to carry everything alone. Just speak."

    }

  ]);

  const sendMessage = () => {

    if (!input) return;

    const userMessage = { role: "user", content: input };

    const reply = generateResponse(input);

    const companionResponse = {

      role: "assistant",

      content: reply

    };

    setMessages([...messages, userMessage, companionResponse]);

    setInput("");

  };

  const generateResponse = (text) => {

    const lower = text.toLowerCase();

    if (lower.includes("cancer") || lower.includes("sick")) {

      return "That’s a lot to take in. I’m here with you… you don’t have to carry it all at once.";

    }

    if (lower.includes("scared") || lower.includes("afraid")) {

      return "That kind of fear is real. Stay with it for a moment… you’re not alone.";

    }

    if (lower.includes("family")) {

      return "Family situations can weigh on you deeply. I hear that.";

    }

    if (lower.includes("lost") || lower.includes("confused")) {

      return "Sometimes clarity comes by slowing down, not forcing answers.";

    }

    if (text.trim().length < 12) {

      return "I hear you. That matters.";

    }

    return "I’m with you. Just take it one thought at a time.";

  };

  return (

    <div style={{ background: "#000", color: "white", minHeight: "100vh", padding: 20 }}>

      <h1 style={{ color: "gold" }}>PontePath Companion</h1>

      <p style={{ color: "#ccc" }}>

        Speak freely. You're not being told what to do — just guided toward clarity.

      </p>

      <div>

        {messages.map((msg, i) => (

          <div

            key={i}

            style={{

              background: msg.role === "user" ? "#333" : "#111",

              padding: 12,

              borderRadius: 10,

              marginTop: 10

            }}

          >

            {msg.content}

          </div>

        ))}

      </div>

      <input

        value={input}

        onChange={(e) => setInput(e.target.value)}

        placeholder="Speak your thoughts..."

        style={{ width: "100%", padding: 10, marginTop: 15 }}

      />

      <button onClick={sendMessage} style={{ marginTop: 10 }}>

        Talk

      </button>

    </div>

  );

}
