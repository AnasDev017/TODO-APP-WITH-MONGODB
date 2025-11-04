import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Express server se todos GET karna
    axios
      .get("http://localhost:5000/api/todos") // ← apna backend URL
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load todos");
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-center mt-10 text-gray-600">Loading...</h2>;
  if (error) return <h2 className="text-center mt-10 text-red-500">{error}</h2>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">📝 My Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}
