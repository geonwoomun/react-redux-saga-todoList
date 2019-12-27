import React , {useState, useCallback}from "react";
import { List, Typography, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { DELETE_TODO_REQUEST, UPDATE_TODO_REQUEST } from "../reducers/todo";

const ToDoItem = ({todo}) => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate ] = useState(false);
  const [content, setContent] = useState(todo.content);
  const updateOnclick = useCallback(() => {
    setIsUpdate(true);
  },[])
  const deleteOnClick = useCallback(() => {
    dispatch({
        type : DELETE_TODO_REQUEST,
        data : todo.id
    })
  },[todo.id]);
  const contentOnChange = (e) => {
      setContent(e.target.value);
  };

  const updateOkOnclick = useCallback((e) => {
        dispatch({
            type : UPDATE_TODO_REQUEST,
            data : {
                id : todo.id,
                content
            }
        }),
        setIsUpdate(false);
  },[content])
  const cancleOnClick = useCallback((e) => {
    setIsUpdate(false);
  },[])
  return (
    <List.Item style={{ display: "flex", justifyContent: "space-between" }}>
      {!isUpdate ? <><Typography.Text mark>DO!</Typography.Text> {todo.content}</> :
      <Input value={content} onChange={contentOnChange}/>}
      <div style={{ display: "flex" }}>
        {!isUpdate ? <><Button style={{ background: "yellowgreen", color: "white" }}
        onClick={updateOnclick} loading= {todo.isUpdated}>
          수정
        </Button><Button type="danger" onClick={deleteOnClick} loading={todo.isDeleted} >삭제</Button></> :
        <>
        <Button type = "primary"
        onClick={updateOkOnclick}>
          확인
        </Button>
        <Button type="danger" onClick={cancleOnClick} >취소</Button></>}
        
      </div>
    </List.Item>
  );
};

export default ToDoItem;
