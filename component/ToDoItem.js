import React , {useState, useCallback, useEffect}from "react";
import { List, Typography, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { DELETE_TODO_REQUEST, UPDATE_TODO_REQUEST } from "../reducers/todo";

const ToDoItem = ({todo}) => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate ] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [content, setContent] = useState(todo.content);
  const [isDid , setIsDid ] = useState(false);
  useEffect(() => {
    setIsDeleted(false);
    setIsUpdated(false);
  },[todo.id, todo.isChange]);
  const updateOnclick = useCallback(() => {
    setIsUpdate(true);
  },[])
  const deleteOnClick = useCallback(() => {
    setIsDeleted(true);
    dispatch({
        type : DELETE_TODO_REQUEST,
        data : todo.id
    })
  },[todo]);
  const contentOnChange = (e) => {
      setContent(e.target.value);
  };
  
  const updateOkOnclick = useCallback(() => {
        dispatch({
            type : UPDATE_TODO_REQUEST,
            data : {
                id : todo.id,
                content
            }
        }),
        setIsUpdate(false);
        setIsUpdated(true);
  },[content])
  const cancleOnClick = useCallback(() => {
    setIsUpdate(false);
  },[]);
  const doOnClick = useCallback(() => {
    setIsDid(!isDid)
  }, [isDid]);
  return (
    <List.Item style={{ display: "flex", justifyContent: "space-between" }}>
      {!isUpdate ? <><Typography.Text mark onClick={doOnClick}>{isDid === false ? "Do!" : "Did"}</Typography.Text> {todo.content}</> :
      <Input value={content} onChange={contentOnChange}/>}
      <div style={{ display: "flex" }}>
        {!isUpdate ? <><Button style={{ background: "yellowgreen", color: "white" }}
        onClick={updateOnclick} loading= {isUpdated}>
          수정
        </Button><Button type="danger" onClick={deleteOnClick} loading={isDeleted} >삭제</Button></> :
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
