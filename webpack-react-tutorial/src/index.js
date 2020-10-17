
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from "./js/components/Form";
import TestforMe from "./js/components/TestinClass";
import {columnIndex,scoreCard} from "./js/components/TestinClassData";
import Example from "./js/components/AlertDismissibleExample"
ReactDOM.render(<Form scoreCard={scoreCard} columnIndex={columnIndex}/>,document.getElementById('container'));
ReactDOM.render(<Example/>,document.getElementById("Test"));
//ReactDOM.render(<TestforMe scoreCard = {scoreCard} columnIndex = {columnIndex} />,document.getElementById("ExampleinClass"))
