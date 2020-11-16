import React from 'react';
import Todo from './Todo';
import {useSelector} from 'react-redux';

/*
const TodoList = ({todos,toggleTodo}) => (
    <ul>
        {todos.map(todo=>(
            <Todo 
            key={todo.id}
            {...todo}
            onClick={()=>toggleTodo(todo.id)}
            />
        ))}
    </ul>
)*/
function TodoList(props){
    const {todos,toggleTodo} = props;
    console.log(toggleTodo);
    return(
    <ul>
        {todos.map(todo=>(
            <Todo 
            key={todo.id}
            {...todo}
            onClick={()=>toggleTodo(todo.id)}
            />
        ))}
    </ul>
    )
}



export default TodoList;