import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

import {FormInClass} from "./js/components/Form";
import TestforMe from "./js/components/TestinClass";
import {columnIndex,scoreCard} from "./js/components/TestinClassData";
import {Example} from "./js/components/AlertDismissibleExample";
import {CarDetail} from "./js/components/CarDetail";
ReactDOM.render(<FormInClass scoreCard={scoreCard} columnIndex={columnIndex} CarDetail={CarDetail} />,document.getElementById('container'));

//Instead with Hook
//ReactDOM.render(<Example/>,document.getElementById("Test"));

