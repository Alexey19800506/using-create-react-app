import React from 'react';
import ReactDOM from 'react-dom'
import "./styles.css"
 
const rootElement = document.querySelector('#root');

const element = ( 
<div className = "greeting" >
   <h1 className = "greeting-title" > Hello, world! </h1>
   <p className = "greeting-text" > I'm learning React</p>
</div>  
);

ReactDOM.render(element, rootElement);