import React from "react"

function Card(props){
    let techs = []
    props.tech.forEach(element => {
        techs.push(<span>{element}</span>)
    });
    return(
        <div className="card">
            <div className="front">
                <h3 className="script">{props.name}</h3>
            </div>
            <div className="rear">
                <h4>{props.description}</h4>
                <div className="skills-container creamy">
                    <h4>Technologies Used</h4>
                    {techs}
                </div>
            </div>
        </div>
    )
}

export default Card