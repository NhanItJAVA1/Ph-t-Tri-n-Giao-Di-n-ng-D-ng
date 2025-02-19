import Calculator from "./components/Calculator";
import Sum from "./components/Sum";
import TodoApp from "./components/TodoApp";
import ListComponent from "./components/ListComponent";
export default function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: '100%', background: "#1e1e1e" }}>
      <ListComponent />
    </div>
  );
}
