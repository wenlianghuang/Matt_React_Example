import './App.css';
import allActions from './action';
import {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
function App() {
  const counter = useSelector(state => state.counter);
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const user = {name: "Matt"};
  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])
  return (
    <div className="App">
      {
        currentUser.loggedIn ? 
        <>
          <h1>Hello, {currentUser.user.name} </h1>
          <button onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
        </>
        :
        <>
          <h1>Please login</h1>
          <button onClick={() => dispatch(allActions.userActions.setUser(user))}>Login as Matt</button>
        </>
      }
      <h1>Counter: {counter} </h1>
      <button onClick={()=>dispatch(allActions.counterActions.increment())}>
        +
      </button>
      <button onClick={()=>dispatch(allActions.counterActions.decrement())}>
        -
      </button>
    </div>
  );
}

export default App;
