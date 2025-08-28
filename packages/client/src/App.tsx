import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">{message}</h1>
    </div>
  );
}

export default App;
