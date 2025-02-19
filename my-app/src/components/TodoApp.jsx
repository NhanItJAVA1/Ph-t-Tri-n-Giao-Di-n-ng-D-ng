import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{
      width: "320px",
      padding: "20px",
      background: "#2d2d2d",
      color: "white",
      boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      borderRadius: "10px"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: "15px" }}>TodoApp</h2>
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
          style={{
            flex: 1,
            padding: "8px",
            background: "#3a3a3a",
            color: "white",
            border: "1px solid #555",
            borderRadius: "5px"
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "8px 12px",
            background: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index} style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "8px 0",
            borderBottom: "1px solid #555"
          }}>
            {t}
            <button
              onClick={() => removeTask(index)}
              style={{
                background: "#e53935",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "5px 10px",
                cursor: "pointer"
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
