import { useState } from "react";

export default function AI() {

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    const res = await fetch("/api/ai", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        messages: [...messages, userMessage],

      }),

    });

    const data = await res.json();

    setMessages(prev => [...prev, userMessage, data]);

    setInput("");

  };

  return (

    <div style={{ padding: 20, background: "black", color: "white", minHeight: "100vh" }}>

      

      <h1 style={{ color: "gold" }}>PontePath Companion</h1>

      <div style={{ marginTop: 20 }}>

        {messages.map((msg, i) => (

          <div key={i} style={{ marginBottom: 15 }}>

            <div style={{ opacity: 0.7 }}>

              {msg.role === "user" ? "You" : "Companion"}

            </div>

            <div>{msg.content}</div>

          </div>

        ))}

      </div>

      <div style={{ marginTop: 20 }}>

        <input

          value={input}

          onChange={(e) => setInput(e.target.value)}

          placeholder="Speak your thoughts..."

          style={{ width: "70%", padding: 10 }}

        />

        <button onClick={sendMessage} style={{ padding: 10, marginLeft: 10 }}>

          Talk

        </button>

      </div>

    </div>

  );

}
