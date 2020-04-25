import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import Face from "./face"
import Header from "./Header"
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"

function App(){
    return (
        <div id="App">
            <Header />
            <Face />
            <Education /> 
            <Experience />
            <Skills />  
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))