
import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const Popup = ({ setShowPopup,updateTodoVal,setUpdateUI}) => {
  const [input, setInput] = useState(updateTodoVal.text);
  
  const updateTodo = async (e) => {
    try {
      axios.put(`${baseURL}/editTodo/${updateTodoVal.id}`,{todoText: input})
      setShowPopup(false);
      setUpdateUI((prevState)=>!prevState)
    } catch (error) {
      console.log("err",error);
    }
  }
  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>

        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update ToDo..."
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
