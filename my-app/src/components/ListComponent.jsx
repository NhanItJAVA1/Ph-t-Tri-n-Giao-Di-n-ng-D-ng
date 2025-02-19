import { useState } from "react";

export default function ListComponent() {
    const [lyr, setLyr] = useState("");
    const component_text = (text) => {
        const a = text;
        if (a === "APT") {
            setLyr("APT: https://www.youtube.com/watch?v=Zqf6f9wJw4Y");
        }
        else if (a === "Die With A Slime") {
            setLyr("Die With A Slime: https://www.youtube.com/watch?v=Zqf6f9wJw4Y");
    }
}
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                {["APT", "Die With A Slime"].map((text) => (
                    <button key={text} onClick={() => component_text(text)} style={{
                        flex: 1,
                        margin: "5px",
                        padding: "10px",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>
                        {text}
                    </button>
                ))}
            </div>
            <span>{lyr}</span>
        </>
    );
}