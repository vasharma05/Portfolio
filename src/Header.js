import React from "react"
import "./assets/css/Header.css"
import rightArrow from "./assets/img/arrow-right.png"
import leftArrow from "./assets/img/arrow-left.png"

import git from "./assets/img/github.png"
import  linkedin from "./assets/img/linkedin.png"

function openSidebar(){
    let sidebar = document.getElementById("sidebar")
    sidebar.style.left = "0"
}
function closeSidebar(event){
    let sidebar = document.getElementById("sidebar")
    if (event.target === sidebar ){
        if(window.innerWidth<=500){
            sidebar.style.left = "-60vw"
        }else if(window.innerWidth<=768){
            sidebar.style.left = "-40vw"
        }else{
            sidebar.style.left = "-30vw"
        }
    }
}
class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            "section":0
        }
        this.slide = this.slide.bind(this)
    }

    slide(event){
        let root = document.getElementById("root")
        let target = event.target.getAttribute("target")
        root.style.marginLeft = -target*100 + "vw"
        this.setState({"section":parseInt(target)})
        event.target = document.getElementById("sidebar")
        closeSidebar(event)
    }



    render(){
        const {section} = this.state
        let list = ["About Me","Education","Work Experience","Skills","Projects","Activities","Hire Me"]
        return (
                <header className="header" onClick={()=>{console.log("help")}}>
                    <div onMouseOver={openSidebar} id="burger_icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="taskbar">
                        <h3 className="creamy brand">{"<vasharma05 />"}</h3>
                    </div>
                    <div className="navigation">
                            { section ? <div><img className="left-arrow" onClick={this.slide} target={section-1} src={leftArrow} alt="left arrow" /><p>{list[section-1]}</p></div>: <div></div>}
                            { section+1 !== list.length? <div><p>{list[section+1]}</p><img className="right-arrow" target={section+1} onClick={this.slide} src={rightArrow} alt="right arrow" /></div>:<div></div>}
                    </div>
                    <div className="links">
                        <ul>
                            <li><a href="https://github.com/vasharma05"><img src={git} alt="linkedin" /></a></li>
                            <li><a href="https://linkedin.com/in/vasharma05"><img src={linkedin} alt="linkedin" /></a></li>
                        </ul>
                    </div>
                    <div id="sidebar" onMouseOut={closeSidebar} >
                        <ul className="blackboard" onMouseOver={openSidebar}>
                            <li target="0" key="0" onClick={this.slide}>About Me</li>
                            <li target="1" key="1" onClick={this.slide}>Education</li>
                            <li target="2" key="2" onClick={this.slide}>Work Experience</li>
                            <li target="3" key="3" onClick={this.slide}>Skills</li>
                            <li target="4" key="4" onClick={this.slide}>Projects</li>
                            <li target="5" key="5" onClick={this.slide}>Activities</li>
                            <li target="6" key="6" onClick={this.slide}>Hire Me</li>
                        </ul>
                    </div>
                </header>
        )
    }
}
export default Header