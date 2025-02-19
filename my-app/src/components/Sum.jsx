import { useState } from "react";

export default function Sum() {
    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [result, setResult] = useState(null);
    function handleSum(e){
        setResult(parseInt(number1) + parseInt(number2));
    }
    function handleClear(e){
        setNumber1('');
        setNumber2('');
        setResult(null);
    }
    return(
        <>
        <div>
            <input type="number" value={number1} onChange={(e) => setNumber1(e.target.value)}  placeholder="Số thứ nhất" style={{ width: "100%", padding: "8px", marginBottom: "10px", color: "white", border: "1px solid #555", borderRadius: "5px" }} />
            <input type="number" value={number2} onChange={(e) => setNumber2(e.target.value)} placeholder="Số thứ hai" style={{ width: "100%", padding: "8px", marginBottom: "10px", color: "white", border: "1px solid #555", borderRadius: "5px" }} />
            <br />
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={handleSum} style={{ width: "100%", padding: "8px", marginBottom: "10px", color: "white", border: "1px solid #555", borderRadius: "5px", backgroundColor:"transparent" }}>Tính</button>
                <button onClick={handleClear} style={{ width: "100%", padding: "8px", marginBottom: "10px", color: "white", border: "1px solid #555", borderRadius: "5px", backgroundColor:"transparent" }}>Xóa</button>
            </div>
            <span>{result}</span>
        </div>
        </>

    );
}
