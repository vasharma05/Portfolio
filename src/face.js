import React from "react"
import logo from "./assets/img/Me.jpg"
import "./assets/css/index.css"
class Face extends React.Component{
    render(){
        return(
            <div className="intro">
                <div className="intro-left">
                    <h1 className="name">Hello! I am <span>Vineet Sharma</span></h1>
                    <h3>Student, National Institute of Technology Hamirpur</h3>
                    <h3>Full Stack Web Developer</h3>
                    <p>A developer by interest and love for code, currently exploring and making my way through Web Development. I am open to create and work in multiple fields and platforms whether I am an old participant or newly introduced to the same.</p>
                    <div>
                        <a href="#about" className="knowMore">Know More...</a>
                        <a href="https://drive.google.com/open?id=1xsZiMRgWlYLz_LKikttakzhaDDtEOyTJ" className="knowMore" target="_blank" rel="noopener noreferrer">Download Resume</a>
                    </div>
                </div>
                <div className="intro-right">
                    <img className="pic" src={logo} alt = "Vineet Sharma" />
                </div>
            </div>
        )
    }
}
export default Face