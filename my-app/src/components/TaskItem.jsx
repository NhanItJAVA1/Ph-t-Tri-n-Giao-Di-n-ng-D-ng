export default function TaskItem({ text, onRemove }) {
    return (
      <li className="flex justify-between items-center p-3 mb-2 border rounded">
        <span className="flex-1">{text}</span>
        <button 
          onClick={onRemove} 
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Remove
        </button>
      </li>
    );
  }
  