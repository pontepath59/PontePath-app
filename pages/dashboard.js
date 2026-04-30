export default function Dashboard() {

  return (

    <div style={{

      padding: 20,

      background: "#0a0a0a",

      color: "white",

      minHeight: "100vh",

      fontFamily: "Arial"

    }}>

      <h1 style={{ color: "gold" }}>Welcome to PontePath</h1>

      <p>Your journey starts here.</p>

      <div style={{ marginTop: 30 }}>

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

  

  );

}
