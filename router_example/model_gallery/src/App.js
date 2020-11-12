import './App.css';
import {BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog';
function App() {
  return (
    <BrowserRouter>
      <Blog/>
    </BrowserRouter>
  );
}

export default App;
