import React from 'react';
import AddTodo from '../containers/AddTodo'
import VisibilityFilter from '../containers/VisibleTodoList';
import Footer from './Footer';
function App() {
  return (
    <div>
      
      <AddTodo/>
      
      <VisibilityFilter/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
