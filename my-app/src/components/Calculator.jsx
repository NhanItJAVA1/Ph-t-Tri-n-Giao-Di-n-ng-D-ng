import { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Invalid Input");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by 0");
        break;
      default:
        setResult("Error");
    }
  };

  return (
    <div style={{
      width: "320px",
      padding: "20px",
      color: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      borderRadius: "10px",
      textAlign: "center"
    }}>
      <h2></h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Số Thứ Nhất"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          color: "white",
          border: "1px solid #555",
          borderRadius: "5px"
        }}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Số Thứ Hai"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          color: "white",
          border: "1px solid #555",
          borderRadius: "5px"
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
        {["+", "-", "*", "/"].map((op) => (
          <button key={op} onClick={() => calculate(op)} style={{
            flex: 1,
            margin: "5px",
            padding: "10px",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            {op}
          </button>
        ))}
      </div>
      <h3 style={{ marginTop: "15px", color: "red" }}>Result: {result !== null ? result : "N/A"}</h3>
    </div>
  );
}
