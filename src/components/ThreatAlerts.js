import React from "react";

function ThreatAlerts({ threats }) {
    return (
        <div className="threat-alerts mt-4">
            <h3>Ameaças Detectadas</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Gravidade</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {threats.map((threat) => (
                        <tr key={threat.id} className={`table-${threat.severity === "Alta" ? "danger" : "warning"}`}>
                            <td>{threat.id}</td>
                            <td>{threat.type}</td>
                            <td>{threat.severity}</td>
                            <td>{threat.timestamp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ThreatAlerts;
