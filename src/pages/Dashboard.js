import React from "react";

function Dashboard({ payments }) {
  const total = payments.length;
  const success = payments.filter(p => p.status === "SUCCESS").length;
  const failed = payments.filter(p => p.status === "FAILED").length;
  const pending = payments.filter(
    p => p.status === "CREATED" || p.status === "PROCESSING"
  ).length;

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <div className="card">
        <p>Total Payments: {total}</p>
        <p>Success: {success}</p>
        <p>Pending: {pending}</p>
        <p>Failed: {failed}</p>
      </div>
    </div>
  );
}

export default Dashboard;