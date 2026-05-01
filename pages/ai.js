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

    // serious / health

    if (lower.includes("cancer") || lower.includes("sick")) {

      return "That’s a lot to take in. Anyone would feel that. I’m here with you… you don’t have to carry it all at once.";

    }

    // fear

    if (lower.includes("scared") || lower.includes("afraid")) {

      return "Yeah… that kind of fear hits deep. Stay with it for a second. You’re not alone in this.";

    }

    // family weight

    if (lower.includes("family")) {

      return "Family situations can sit heavy on you. I can feel that in what you’re saying.";

    }

    // confusion

    if (lower.includes("lost") || lower.includes("confused")) {

      return "When things feel unclear like that, it usually means something inside needs more time, not pressure.";

    }

    // pain

    if (lower.includes("hurt") || lower.includes("pain")) {

      return "That kind of pain doesn’t just show up for no reason. I’m here with you in it.";

    }

    // short replies (like "her life")

    if (text.trim().length < 12) {

      return "Yeah… I hear that. That’s real.";

    }

    // default tone

    return "I hear you. Just stay with it for a second… no need to rush anything.";

  };

  return (

    <div

      style={{

        background: "#000",

        color: "white",

        minHeight: "100vh",

        padding: 20,

        fontFamily: "Arial"

      }}

    >

      <h1 style={{ color: "gold" }}>PontePath Companion</h1>

      <p style={{ color: "#ccc", marginBottom: 20 }}>

        A place for clarity, guidance, and real conversation. You’re not being told what to do — just helped to see more clearly.

      </p>

      <div style={{ marginBottom: 20 }}>

        {messages.map((msg, i) => (

          <div

            key={i}

            style={{

              background: msg.role === "user" ? "#333" : "#111",

              padding: 12,

              borderRadius: 10,

              marginBottom: 10

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

        style={{

          width: "100%",

          padding: 12,

          borderRadius: 8,

          border: "none",

          marginBottom: 10

        }}

      />

      <button

        onClick={sendMessage}

        style={{

          background: "purple",

          color: "white",

          padding: 12,

          border: "none",

          borderRadius: 8

        }}

      >

        Talk

      </button>

    </div>

  );

}
