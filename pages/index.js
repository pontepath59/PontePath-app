export default function Home() {

  return (

    <div

      style={{

        display: "flex",

        flexDirection: "column",

        alignItems: "center",

        justifyContent: "center",

        minHeight: "100vh",

        background: "#0a0a0a",

        color: "white",

        fontFamily: "Arial",

        textAlign: "center",

        padding: 20

      }}

    >

      <h1 style={{ color: "gold", fontSize: 32 }}>

        PontePath

      </h1>

      <p style={{ fontStyle: "italic", color: "#aaa", marginBottom: 10 }}>

        Faith. Clarity. Real Conversation.

      </p>

      <p style={{ maxWidth: 300 }}>

        You’re not alone. Talk things through, explore your thoughts,

        and find clarity — at your pace.

      </p>

      <div style={{ marginTop: 40 }}>

        <button

          onClick={() => window.location.href = "/ai"}

          style={{

            margin: 10,

            padding: 14,

            background: "#6a0dad",

            color: "white",

            border: "none",

            borderRadius: 8,

            fontSize: 16,

            cursor: "pointer"

          }}

        >

          Talk It Out

        </button>

        <button

          style={{

            margin: 10,

            padding: 14,

            background: "#333",

            color: "white",

            border: "none",

            borderRadius: 8,

            fontSize: 16,

            cursor: "pointer"

          }}

        >

          Reflect & Think

        </button>

        <button

          style={{

            margin: 10,

            padding: 14,

            background: "gold",

            color: "black",

            border: "none",

            borderRadius: 8,

            fontSize: 16,

            cursor: "pointer"

          }}

        >

          Become a Member ($9.99)

        </button>

      </div>

    </div>

  );

}
