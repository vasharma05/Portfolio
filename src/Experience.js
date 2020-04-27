import React from "react"
import "./assets/css/Experience.css"

function closeSidebar(event){
    let sidebar = document.getElementById("sidebar")
    if(window.innerWidth<=500){
        sidebar.style.left = "-60vw"
    }else if(window.innerWidth<=768){
        sidebar.style.left = "-40vw"
    }else{
        sidebar.style.left = "-30vw"
    }
}
function Experience(){
    return (
        <div className="container">
            <div className="content experience" onClick={closeSidebar}>
                <h2 className="red heading">Work Experience</h2>
                <div className="card-container">
                    <div className="card">
                        <div className="card-left">
                            <h3 className="company red blackboard">Westvindh</h3>
                            <h4>Gurugram, Haryana</h4>
                            <p className="description">On-site winter intern in Gurugram for a duration of 4 weeks at a renowned startup as a web developer.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-left">
                            <h3 className="company red blackboard">Telecommunications Consultancy India Ltd.</h3>
                            <h4>New Delhi</h4>
                            <p className="description">Six weeks Intern program with high exposure to a professional working environment under
                                highly skilled seniors and an opportunity to come up with new ideas and improvements in
                                the working place.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience