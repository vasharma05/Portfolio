import React from "react"
import "./assets/css/Experience.css"
import westvindh from "./assets/img/Westvindh.png"

function Experience(){
    return (
        <div className="container">
            <div className="content experience">
                <h2 className="red heading script">Work Experience</h2>
                <div className="card-container">
                    <div className="card">
                        <div className="card-left">
                            <h3>Westvindh</h3>
                            <p>On-site winter intern in Gurugram for a duration of 4 weeks at a renowned startup as a web developer.</p>
                        </div>
                        <div className="card-right">
                            <a href="http://westvindh.com"><img src={westvindh} alt="Westindh Website"/></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-left">
                            <h3>Telecommunications Consultancy India Ltd.</h3>
                            <h4>New Delhi</h4>
                            <p>Six weeks Intern program with high exposure to a professional working environment under
                                highly skilled seniors and an opportunity to come up with new ideas and improvements in
                                the working place.</p>
                        </div>
                        <div className="card-right">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience