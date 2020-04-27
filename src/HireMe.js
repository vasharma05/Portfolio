import React from "react"
import "./assets/css/HireMe.css"

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
function HireMe(){
    return (
        <div className="container">
            <div className="content hireme" onClick={closeSidebar}>
                <h2 className="red heading ">Why you should hire me?</h2>
            </div>
        </div>
    )
}
export default HireMe