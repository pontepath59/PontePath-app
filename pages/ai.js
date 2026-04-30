import { useState } from "react";

export default function Companion() {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const handleSend = () => {

    if (!input) return;

    const userMessage = { role: "user", text: input };

    // Companion-style response (foundation)

    const response = {

      role: "companion",

      text: generateResponse(input)

    };

    setMessages([...messages, userMessage, response]);

    setInput("");

  };

  const generateResponse = (text) => {

    return `I hear you. It sounds like you're thinking about "${text}".

Let’s slow it down for a second.

What do you feel is really at the center of this for you?

One way to look at it could be this:

- There may be an opportunity here you haven’t fully explored

- But there could also be something you’re unsure about

I may not fully agree or disagree yet — I’d want to understand more.

From a faith perspective, sometimes clarity comes when we sit with it, not rush it.

What direction are you leaning toward right now?`;

  };

  return (

    <div style={{

      padding: 20,

      background: "#0a0a0a",

      color: "white",

      minHeight: "100vh",

      fontFamily: "Arial"

    }}>

      <h1 style={{ color: "gold" }}>PontePath Companion</h1>

      <p style={{ marginBottom: 20 }}>

        Speak freely. Think clearly. You’re not being told what to do —

        just guided to see your path more clearly.

      </p>

      <div style={{ marginBottom: 20 }}>

        {messages.map((msg, i) => (

          <div key={i} style={{

            marginBottom: 10,

            textAlign: msg.role === "user" ? "right" : "left"

          }}>

            <div style={{

              display: "inline-block",

              padding: 10,

              borderRadius: 10,

              background: msg.role === "user" ? "#333" : "#222"

            }}>

              {msg.text}

            </div>

          </div>

        ))}

      </div>

      <input

        value={input}

        onChange={(e) => setInput(e.target.value)}

        placeholder="Speak your thoughts..."

        style={{

          width: "100%",

          padding: 10,

          borderRadius: 5,

          marginBottom: 10

        }}

      />

      <button onClick={handleSend} style={{

        padding: 10,

        background: "purple",

        color: "white",

        border: "none",

        borderRadius: 5

      }}>

        Talk

      </button>

    </div>

  );

}
