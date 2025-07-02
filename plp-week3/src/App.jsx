import { useState } from "react"; 
import Task from "./comonents/task";
import Navbar from "./comonents/navbar";
import cards from "./comonents/cards";
import Footer from "./comonents/footer";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Read a book", completed: false },
    { id: 2, title: "Write a summary", completed: false},
    { id: 3, title: "Practice coding", completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      {tasks.map(task => (
        <Task key={task.id} {...task} onToggle={toggleTask} />
      ))}
    </div>
  );
}