import React, { useState } from "react";

function CreatePayment({ payments, setPayments }) {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [customerId, setCustomerId] = useState("");

  const handleCreate = () => {
    if (!amount || amount <= 0) {
      alert("Invalid amount");
      return;
    }

    const paymentId = "PAY-" + Date.now();

    const newPayment = {
      paymentId,
      amount: Number(amount),
      currency,
      customerId,
      status: "CREATED",
      failureReason: null,
    };

    setPayments([...payments, newPayment]);

    setAmount("");
    setCustomerId("");
  };

  return (
    <div className="container">
      <h2>Create Payment</h2>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        placeholder="Currency"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      />

      <input
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />

      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreatePayment;
