import React from "react"
import "./assets/css/Projects.css"
import Card from "./Card"

class Projects extends React.Component{
    render(){
        return(
            <div className="container">
                <div className = "content projects">
                    <div className="card">
                        <h2 className="creamy heading">Projects</h2>
                    </div>
                    <Card tech={["Django","HTML/CSS3", "JavaScript"]} name = "<vasharma05 /> Blogs" description="This a personal blog project built upon Django wherein one can login and the users can comment on the blogs." />
                    <Card tech={["Django","Kotlin","HTML/CSS3", "Etherium", "Django REST Framework"]} name="FundBucket" description="FundBucket: A micro-crowd funding platform based on Django and transactions done on Etherium (Blockchain)" />
                    <Card tech= {["Wordpress", "HTML/CSS3", "Javascript"]} name="Westvindh.com" description="Customized the already published website on wordpress.com to the required designs and structure of the website." />
                    <Card tech= {["HTML/CSS3", "JavaScript", "Bootstrap"]} name="Trade My Crop" description="Designed a simple and sleek user-friendly platform wherein traders trade products without the intervention of any broker." />
                    <Card tech={["HTML/CSS3", "JavaScript", "Bootstrap", "PHP"]} name="Contract Management System" description="Developed a system which can add, update, link, and track the live status of issued contracts that are signed by an admin between a vendor and a client or both" />
                </div>
            </div>
        )
    }
}

export default Projects