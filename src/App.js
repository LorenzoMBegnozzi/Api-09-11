import React, { useState, useEffect } from "react";
import ThreatAlerts from "./components/ThreatAlerts";
import "./App.css";

function App() {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newThreat = {
        id: threats.length + 1,
        type: Math.random() > 0.5 ? "Phishing" : "Ransomware",
        severity: Math.random() > 0.7 ? "Alta" : "Baixa",
        timestamp: new Date().toLocaleTimeString(),
      };
      setThreats((prevThreats) => [...prevThreats, newThreat]);
    }, 5000);

    return () => clearInterval(interval);
  }, [threats]);

  return (
    <div className="App container">
      <h1 className="mt-5">Detecção de Ameaças Cibernéticas</h1>
      <ThreatAlerts threats={threats} />
    </div>
  );
}

export default App;
