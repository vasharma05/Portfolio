import React from "react"
import "./assets/css/Experience.css"
import westvindh from "./assets/img/Westvindh.png"
import cms from "./assets/img/CMS.PNG"

function Experience(){
    return (
        <div className="container">
            <div className="content experience">
                <h2 className="red heading">Work Experience</h2>
                <div className="card-container">
                    <div className="card">
                        <div className="card-left">
                            <h3 className="red blackboard">Western Vindhyanchal</h3>
                            <h4>Gurugram, Haryana</h4>
                            <p>On-site winter intern in Gurugram for a duration of 4 weeks at a renowned startup as a web developer.</p>
                        </div>
                        <div className="card-right">
                            <a href="http://westvindh.com"><img src={westvindh} alt="Westindh Website"/></a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-left">
                            <h3 className="red blackboard">Telecommunications Consultancy India Ltd.</h3>
                            <h4>New Delhi</h4>
                            <p>Six weeks Intern program with high exposure to a professional working environment under
                                highly skilled seniors and an opportunity to come up with new ideas and improvements in
                                the working place.</p>
                        </div>
                        <div className="card-right">
                            <a href="https://github.com/vasharma05/ContractManagementSystem"><img src={cms} alt="Contract Management System"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience