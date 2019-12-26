import React from "react";
import ToDoItems from "../component/ToDoItems";
import InputForm from '../component/InputForm';
const Home = () => {
  return (
    <div>
      <InputForm/>
      <ToDoItems/>
    </div>
  );
};

export default Home;
