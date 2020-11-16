import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import {useSelector,useDispatch} from 'react-redux';
const AddTodo = () => {
    let input
    const AddTodoCount = useSelector(state => state);
    console.log("AddTodoCount: ", AddTodoCount);
    const dispatch = useDispatch();
    //console.log("Dispatch: ", dispatch);
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <input ref={node => input = node} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
  
  //export default connect()(AddTodo)
  export default AddTodo;