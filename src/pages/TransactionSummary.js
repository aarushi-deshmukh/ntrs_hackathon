import React from "react";
import "./TransactionSummary.css";

function TransactionSummary({ payments }) {

  const total = payments.length;

  const success = payments.filter(p => p.status === "SUCCESS").length;
  const failed = payments.filter(p => p.status === "FAILED").length;
  const pending = payments.filter(p => 
    p.status === "CREATED" || p.status === "PROCESSING"
  ).length;

  const fraudFailures = payments.filter(p => 
    p.failureReason === "Fraud rule triggered"
  ).length;

  const totalAmount = payments.reduce((sum, p) => sum + p.amount, 0);

  const avgTransactionValue = total > 0 
    ? (totalAmount / total).toFixed(2) 
    : 0;

  const successRate = total > 0 
    ? ((success / total) * 100).toFixed(1) 
    : 0;

  const failureRate = total > 0 
    ? ((failed / total) * 100).toFixed(1) 
    : 0;

  const systemHealth = successRate > 70 ? "Healthy" : "Attention Required";

  return (
    <div className="summary-container">

      <h2>Transaction Analytics Dashboard</h2>

      <div className="summary-grid">

        <div className="summary-card">
          <p>Total Transactions</p>
          <h1>{total}</h1>
        </div>

        <div className="summary-card success">
          <p>Success Rate</p>
          <h1>{successRate}%</h1>
        </div>

        <div className="summary-card failed">
          <p>Failure Rate</p>
          <h1>{failureRate}%</h1>
        </div>

        <div className="summary-card pending">
          <p>Pending</p>
          <h1>{pending}</h1>
        </div>

        <div className="summary-card fraud">
          <p>Fraud Triggers</p>
          <h1>{fraudFailures}</h1>
        </div>

        <div className="summary-card">
          <p>Avg Transaction Value</p>
          <h1>₹ {avgTransactionValue}</h1>
        </div>

      </div>

      <div className="system-health">
        <h3>System Health: {systemHealth}</h3>
      </div>

    </div>
  );
}

export default TransactionSummary;