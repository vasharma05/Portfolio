import React from "react"
import "./assets/css/Skills.css"

function Skills(){
    return (
        <div className="container">
            <div className="content skills">
                <h2 className="heading red">Have a look on my technical skills</h2>
                <div className='skills-container creamy'>
                    <h3 className="blackboard">Web Development</h3>
                    <p className="red">Front End Development</p>
                    <span>HTML/CSS3</span><span>UI/UX Designer</span> <span>JavaScript</span><span>Saas</span> <span>Jquery</span><span>Wordpress</span> <span className="imp">React</span>
                    <p className="red">Back End Development</p>
                    <span className="imp">Django-Python Web Framework</span> <span className="imp">Django REST Framework</span><span>Database Management System</span> <span>SQl</span> <span>MongoDB</span> <span>PHP</span>
                    
                </div>
            </div>
        </div>
    )
}
export default Skills