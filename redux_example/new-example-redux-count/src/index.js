import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import Counter from './components/Counter';
import counter from './reducers/index';

const store = createStore(counter);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={()=>store.dispatch({type:'INCREMENT'})}
    onDecrement={()=>store.dispatch({type:'DECREMENT'})}
    />,document.getElementById('root')
);
render();
store.subscribe(render);
reportWebVitals();
