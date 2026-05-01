export default function Home() {

  return (

    <div style={{

      display: "flex",

      flexDirection: "column",

      alignItems: "center",

      justifyContent: "center",

      minHeight: "100vh",

      background: "#0a0a0a",

      color: "white",

      fontFamily: "Arial",

      textAlign: "center"

    }}>

      <h1 style={{ color: "gold" }}>

        PontePath

      </h1>

      <p>

        A place for clarity, guidance, and real conversation.

        <br />

        You’re not alone — think, reflect, and talk it out.

      </p>

      <div style={{ marginTop: 40 }}>

        <button

          onClick={() => window.location.href = "/ai"}

          style={{

            margin: 10,

            padding: 12,

            background: "purple",

            color: "white",

            border: "none",

            borderRadius: 6

          }}

        >

          Talk it out

        </button>

        <button

          style={{

            margin: 10,

            padding: 12,

            background: "#333",

            color: "white",

            border: "none",

            borderRadius: 6

          }}

        >

          Reflect

        </button>

        <button

          style={{

            margin: 10,

            padding: 12,

            background: "gold",

            color: "black",

            border: "none",

            borderRadius: 6

          }}

        >

          Upgrade ($9.99)

        </button>

      </div>

    </div>

  );

}
