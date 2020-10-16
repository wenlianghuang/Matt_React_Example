import React from 'react';
import ReactDOM from 'react-dom';
import Form from "./js/components/Form";
import TestforMe from "./js/components/TestinClass";
import {columnIndex,scoreCard} from "./js/components/TestinClassData";
ReactDOM.render(<Form scoreCard={scoreCard} columnIndex={columnIndex}/>,document.getElementById('container'));
//ReactDOM.render(<TestforMe scoreCard = {scoreCard} columnIndex = {columnIndex} />,document.getElementById("ExampleinClass"))
