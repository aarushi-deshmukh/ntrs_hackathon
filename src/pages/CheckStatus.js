import React, { useState } from "react";

function CheckStatus({ payments }) {
  const [id, setId] = useState("");
  const [payment, setPayment] = useState(null);

  const check = () => {
    const found = payments.find(p => p.paymentId === id);
    setPayment(found || null);
  };

  return (
    <div className="container">
      <h2>Check Payment Status</h2>

      <input
        placeholder="Enter Payment ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={check}>Check</button>

      {payment && (
        <div className="card">
          <p>Status: {payment.status}</p>
          {payment.failureReason && (
            <p>Reason: {payment.failureReason}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CheckStatus;
