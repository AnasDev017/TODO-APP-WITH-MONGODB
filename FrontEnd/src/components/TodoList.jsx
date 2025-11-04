import axios from "axios";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setUpdateTodoVal }) => {
  const deleteToDo = async () => {
    try {
      await axios.delete(`${baseURL}/deleteTodo/${id}`);
      setUpdateUI((prevState) => !prevState);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="toDo">
      {text}

      <div className="icons">
        <AiFillEdit
          className="icon"
          onClick={() => {
            setUpdateTodoVal({ text, id });
            setShowPopup(true);
          }}
        />
        <RxCross1 className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default ToDo;
