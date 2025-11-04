import React, { useEffect, useState } from "react";
import ToDo from "./components/TodoList";
import "./App.css";
import axios from "axios";
import { baseURL } from "./utils/constant";
import Popup from "./components/PopUp";
import Swal from "sweetalert2";
const App = () => {
  const [input, setInput] = useState("");
  const [toDos, setToDos] = useState([]);
  const [updateUI, setUpdateUI] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [updateTodoVal, setUpdateTodoVal] = useState({})
  const getTodos = async () => {
    try {
      await axios.get(`${baseURL}/getTodos`).then((res) => {
        setToDos(res.data);
      });
    } catch (error) {
      console.log("err", error);
    }
  };
  const addTodo = async () => {
    if(input === ""){
      return Swal.fire({
        title: "Error!",
        text: "Text Feild Is Empty!",
        icon: "error"
      });
     
    }
    try {
      axios.post(`${baseURL}/saveTodo`, { todoText: input });
      setInput("");
      setUpdateUI((prevState)=>!prevState)
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    getTodos();
  }, [updateUI]);
  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <div className="input_holder">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Add a ToDo..."
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <div className="list">
          {toDos.map((data) => {
           return <ToDo 
           key={data._id}
           text={data.todoText} 
           id={data._id} 
           setUpdateUI={setUpdateUI} 
           setShowPopup={setShowPopup}
           setUpdateTodoVal={setUpdateTodoVal}/>;
          })}
        </div>
      </div>
      {showPopup && <Popup setShowPopup={setShowPopup} updateTodoVal={updateTodoVal}setUpdateUI={setUpdateUI} />}
    </main>
  );
};

export default App;
