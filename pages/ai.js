import { useState } from "react";

export default function AI() {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([

    {

      role: "assistant",

      content:

        "I'm here with you. You don’t need to have it all figured out. Just speak."

    }

  ]);

  const sendMessage = () => {

    if (!input) return;

    const userMessage = { role: "user", content: input };

    const companionResponse = {

      role: "assistant",

      content: generateResponse(input)

    };

    setMessages([...messages, userMessage, companionResponse]);

    setInput("");

  };

  const generateResponse = () => {

    return "That sounds heavy. I’m here with you. What feels like the hardest part right now?";

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

        Speak freely. Think clearly. You’re not being told what to do — just

        guided to see your path more clearly.

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

        placeholder="Say what’s on your mind..."

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
