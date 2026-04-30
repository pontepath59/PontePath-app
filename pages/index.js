export default function Home() {

  return (

    <div style={{

      display: "flex",

      flexDirection: "column",

      alignItems: "center",

      justifyContent: "center",

      height: "100vh",

      backgroundColor: "#0a0a0a",

      color: "white",

      fontFamily: "Arial"

    }}>

      <h1 style={{ color: "gold" }}>PontePath</h1>

      <p>Faith. Health. Purpose.</p>

      <button

        onClick={() => window.location.href = "/dashboard"}

        style={{

          marginTop: 20,

          padding: "12px 20px",

          backgroundColor: "purple",

          color: "white",

          border: "none",

          borderRadius: 6

        }}

      >

        Get Started

      </button>

    </div>

  );

}
