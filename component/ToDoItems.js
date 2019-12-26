import React from 'react';
import { List } from 'antd';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';
const ToDoItems = () => {
    const { todo } = useSelector(state => state.todo)
    return (
        <List
        style = {{marginTop : "20px", width : "300px"}}
        header ={<div>ToDo!</div>}
        bordered
        dataSource={todo}
        renderItem={todo => (
            <ToDoItem key={todo.id} todo={todo}/>
        )}>
        </List>
    );
};

export default ToDoItems;