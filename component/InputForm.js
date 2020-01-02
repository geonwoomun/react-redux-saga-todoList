import React, { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodoRequest } from "../reducers/todo";

const InputForm = () => {
  const [newTodo, setNewToDo] = useState("");
  const dispatch = useDispatch();
  const { isAddingTodo } = useSelector(state => state.todo);
  const onChangeInput = useCallback(e => {
    setNewToDo(e.target.value);
  }, []);
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!newTodo || !newTodo.trim()) {
        return alert("할 일을 적어주세요.");
      }
      dispatch(addTodoRequest(newTodo));
      setNewToDo("");
    },
    [newTodo]
  );
  return (
    <Form style={{ display: "flex" }} onSubmit={onSubmit}>
      <Input placeholder="To Do!!" onChange={onChangeInput} value={newTodo} />
      <Button type="primary" htmlType="submit" loading={isAddingTodo}>
        추가
      </Button>
    </Form>
  );
};

export default InputForm;
