import React , {useState, useCallback, useEffect}from "react";
import { List, Typography, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteTodoRequest, upadteTodoRequest } from "../reducers/todo";

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
    if(isDid) {
      alert('이미 완료한 리스트는 수정 할 수 없습니다.');
      return;
    }
    setIsUpdate(true);
  },[isDid]);

  const deleteOnClick = useCallback(() => {
    setIsDeleted(true);
    dispatch(deleteTodoRequest(todo.id))
  },[todo]);

  const contentOnChange = (e) => {
      setContent(e.target.value);
  };
  
  const updateOkOnclick = useCallback(() => {
        dispatch(upadteTodoRequest({todoId : todo.id, content}));
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
      {!isUpdate ? <><Typography.Text style = {{textDecoration : isDid ? "line-through" : null }} mark onClick={doOnClick}>{todo.content}</Typography.Text></> :
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
