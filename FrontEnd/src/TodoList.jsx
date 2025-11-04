import React from "react";

export default function TodoList({ todos }) {
  if (!todos.length)
    return <p className="text-gray-400">No todos found. Add one!</p>;

  return (
    <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-5">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            <span
              className={`${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.title}
            </span>
            <span
              className={`text-sm ${
                todo.completed ? "text-green-400" : "text-yellow-400"
              }`}
            >
              {todo.completed ? "Done" : "Pending"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
