import React from "react";

function ProcessPayment({ payments, setPayments }) {

  const updateStatus = (id, status, reason = null) => {
    setPayments(prev =>
      prev.map(p =>
        p.paymentId === id
          ? { ...p, status, failureReason: reason }
          : p
      )
    );
  };

  const processPayment = (payment) => {
    updateStatus(payment.paymentId, "PROCESSING");

    setTimeout(() => {

      // Fraud rule
      if (payment.amount > 10000) {
        updateStatus(payment.paymentId, "FAILED", "Fraud rule triggered");
        return;
      }

      const success = Math.random() > 0.3;

      if (success) {
        updateStatus(payment.paymentId, "SUCCESS");
      } else {
        updateStatus(payment.paymentId, "FAILED", "Random failure");
      }

    }, 2000);
  };

  return (
    <div className="container">
      <h2>Process Payments</h2>

      {payments
        .filter(p => p.status === "CREATED")
        .map(p => (
          <div key={p.paymentId} className="card">
            <p>{p.paymentId} — {p.amount} {p.currency}</p>
            <button onClick={() => processPayment(p)}>Process</button>
          </div>
        ))}
    </div>
  );
}

export default ProcessPayment;