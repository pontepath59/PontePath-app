export default function Home() {

  return (

    <div style={{

      display: "flex",

      flexDirection: "column",

      alignItems: "center",

      justifyContent: "center",

      height: "100vh",

      background: "#0a0a0a",

      color: "white",

      fontFamily: "Arial",

      textAlign: "center"

    }}>

      <h1 style={{ color: "gold", fontSize: "40px" }}>

        PontePath

      </h1>

      <p style={{ maxWidth: "300px", marginTop: "10px" }}>

        Faith. Health. Purpose.

      </p>

      <button style={{

        marginTop: "20px",

        padding: "12px 24px",

        background: "purple",

        border: "none",

        borderRadius: "8px",

        color: "white",

        fontSize: "16px"

      }}>

        Get Started

      </button>

    </div>

  );

}
