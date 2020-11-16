import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AnimationExample from './containers/AnimationExample';
function App() {
  return (
    <BrowserRouter>
      <AnimationExample/>
    </BrowserRouter>
  );
}

export default App;
