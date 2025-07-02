export default function Task({ id, title, completed, onToggle }) {
  return (
    <div className="flex items-centerjustify-between px-6 py-4 rounded-md shadow-sm bg-white border border-gray-300 hover:shadow-md transition">
      <span
        className={`text-base font-medium ${
          completed ? 'line-through text-gray-400' : 'text-gray-800'
        }`}
      >
        {title}
      </span>

      <button
        onClick={() => onToggle(id)}
        className={`px-3 py-1 text-sm font-semibold rounded transition ${
          completed
            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {completed ? 'Undo' : 'Done'}
      </button>
    </div>
  );
}

