import React from "react";
import "./App.css";

function App() {
  const transactions = [
    { id: "TXN1001", amount: 5000, status: "Success" },
    { id: "TXN1002", amount: 2500, status: "Pending" },
    { id: "TXN1003", amount: 7000, status: "Failed" },
    { id: "TXN1004", amount: 1200, status: "Success" }
  ];

  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((sum, txn) => sum + txn.amount, 0);
  const successCount = transactions.filter(t => t.status === "Success").length;
  const failedCount = transactions.filter(t => t.status === "Failed").length;

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Transaction Summary Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={cardStyle}>
          <h3>Total Transactions</h3>
          <p>{totalTransactions}</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Amount</h3>
          <p>₹{totalAmount}</p>
        </div>

        <div style={{ ...cardStyle, borderLeft: "5px solid green" }}>
          <h3>Successful</h3>
          <p>{successCount}</p>
        </div>

        <div style={{ ...cardStyle, borderLeft: "5px solid red" }}>
          <h3>Failed</h3>
          <p>{failedCount}</p>
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>Transaction ID</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(txn => (
            <tr key={txn.id}>
              <td style={tdStyle}>{txn.id}</td>
              <td style={tdStyle}>₹{txn.amount}</td>
              <td
                style={{
                  ...tdStyle,
                  color:
                    txn.status === "Success"
                      ? "green"
                      : txn.status === "Failed"
                      ? "red"
                      : "orange",
                  fontWeight: "bold"
                }}
              >
                {txn.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cardStyle = {
  flex: 1,
  padding: "20px",
  background: "#f4f6f9",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
};

const thStyle = {
  borderBottom: "2px solid #ddd",
  padding: "10px",
  textAlign: "left"
};

const tdStyle = {
  borderBottom: "1px solid #eee",
  padding: "10px"
};

export default App;
