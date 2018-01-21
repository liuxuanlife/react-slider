import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import Silders from "./components/Silders";

const imgs = [
    require('./images/1.gif'),
    require('./images/2.gif'),
    require('./images/3.jpg'),
    require('./images/4.jpg')
];

ReactDOM.render(
    <Silders
        images={imgs}
        speed={0.5}
        delay={2}
        autoPlay={true}
        autoPause={true}
    />,
    document.querySelector('#root')
);