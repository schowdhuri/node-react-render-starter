import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const sendPing = async () => {
    const response = await fetch("/api/ping");
    const data = await response.text();
    alert("The server responded: " + data);
  };

  const greetServer = async (ev) => {
    ev.preventDefault();
    const name = document.getElementById("name").value;
    const response = await fetch("/api/greet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    const data = await response.text();
    alert(data);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <h2>Ping Test</h2>
        <button onClick={sendPing}>Ping the server</button>
      </div>
      <div className="card">
        <h2>POST Test</h2>
        <form onSubmit={greetServer}>
          <input type="text" id="name" placeholder="Type your name" required />
          <button type="submit">Greet me</button>
        </form>
      </div>
    </>
  );
}

export default App;
