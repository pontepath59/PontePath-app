import { useState } from "react";

export default function AI() {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {

    if (!input) return;

    const userMessage = { role: "user", content: input };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);

    setInput("");

    const response = await fetch("/api/ai", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({ messages: updatedMessages }),

    });

    const data = await response.json();

    const aiMessage = { role: "assistant", content: data.reply };

    setMessages([...updatedMessages, aiMessage]);

  };

  return (

    <div style={{

      background: "#0a0a0a",

      color: "white",

      minHeight: "100vh",

      padding: 20,

      fontFamily: "Arial"

    }}>

      <h1 style={{ color: "gold" }}>PontePath Companion</h1>

      <div style={{ marginTop: 20 }}>

        {messages.map((msg, index) => (

          <div key={index} style={{

            marginBottom: 15,

            padding: 10,

            background: msg.role === "user" ? "#333" : "#1a1a1a",

            borderRadius: 6

          }}>

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

          padding: 10,

          marginTop: 20,

          borderRadius: 6,

          border: "none"

        }}

      />

      <button

        onClick={sendMessage}

        style={{

          marginTop: 10,

          padding: 10,

          background: "purple",

          color: "white",

          border: "none",

          borderRadius: 6

        }}

      >

        Talk

      </button>

    </div>

  );

}
