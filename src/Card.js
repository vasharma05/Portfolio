import React from "react"

function Card(props){
    let techs = []
    props.tech.forEach(element => {
        techs.push(<span>{element}</span>)
    });
    return(
        <div className="card">
            <div className="front">
                <h3 className="blackboard">{props.name}</h3>
            </div>
            <div className="rear">
                <p>{props.description}</p>
                <div className="skills-container creamy">
                    <p>Technologies Used</p>
                    {techs}
                </div>
            </div>
        </div>
    )
}

export default Card