import React from "react"
import "./assets/css/Sidebar.css"


function Sidebar(props){
    return(
        <div id="sidebar" onMouseOut={props.closeSidebar} >
            <ul className="blackboard" onMouseOver={props.openSidebar}>
                <li target="0" key="0" onClick={props.slide}>About Me</li>
                <li target="1" key="1" onClick={props.slide}>Education</li>
                <li target="2" key="2" onClick={props.slide}>Work Experience</li>
                <li target="3" key="3" onClick={props.slide}>Skills</li>
                <li target="4" key="4" onClick={props.slide}>Projects</li>
                <li target="5" key="5" onClick={props.slide}>Activities</li>
                <li target="6" key="6" onClick={props.slide}>Hire Me</li>
            </ul>
        </div>
    )
}

export default Sidebar