import {useCallback} from 'react';
import { connect,useSelector, useDispatch } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import Todo from '../components/Todo';
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


//The theory is just like the "FilterLink.js"
//Can abort the "TodoLink.js" file
export default function VisibleTodoTest(){
  //state.todos: todos belong to reducers folder with hook
  let Statetodos = useSelector(state => state.todos);
  //state.visibilityFilter: visibilityFilter belongs to reducers folder with hook
  let Statevisibility = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();
  let todos = getVisibleTodos(Statetodos,Statevisibility);
  console.log(todos);
  return(
    <ul>
        {todos.map(todo=>(
            <Todo 
            key={todo.id}
            {...todo}
            onClick={()=>dispatch(toggleTodo(todo.id))}
            />
        ))}
    </ul>
  )
}


/*
function mapStateToProps(state){
  return(
    {todos: getVisibleTodos(state.todos,state.visibilityFilter)}
  )
}


function mapDispatchToProps(dispatch){
  return(
    {toggleTodo: (id) => dispatch(toggleTodo(id))}
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
*/