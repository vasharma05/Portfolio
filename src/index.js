import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Face from "./face"
import Header from "./Header"
import Education from "./Education"


function App(){
    return (
        <div>
            <Header />
            <Face />
            <Education />   
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))