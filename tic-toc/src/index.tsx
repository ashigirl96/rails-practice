import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Game from "./Game/Game";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
registerServiceWorker();
