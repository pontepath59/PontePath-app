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

        <button style={{ margin: 10 }}>AI Insights</button>

        <button style={{ margin: 10 }}>Goal Tracker</button>

        <button style={{ margin: 10 }}>Membership Hub</button>

      </div>

    </div>

  );

}
