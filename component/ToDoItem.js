import React, { useState, useCallback } from 'react';
import { List, Typography, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const ToDoItem = () => {
    const { todo } = useSelector(state => state.todo)
    return (
        <List
        style = {{marginTop : "20px", width : "300px"}}
        header ={<div>ToDo!</div>}
        bordered
        dataSource={todo}
        renderItem={todo => (
            <List.Item style={{display: "flex", justifyContent:"space-between"}}>
                <Typography.Text mark>DO!</Typography.Text> {todo}
                <div style={{display: "flex"}}>
                <Button style={{background:"yellowgreen", color : "white"}}>수정</Button>
                <Button type="danger">삭제</Button>
                </div>
            </List.Item>
        )}>
        </List>
    );
};

export default ToDoItem;