import React from 'react';


/*const Todo = ({onClick,completed,text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
            {text}
        </li>
)*/
function Todo(props){
    const {completed,text,onClick} = props;
    return(
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}>
            {text}
        </li>
    )
}

export default Todo;