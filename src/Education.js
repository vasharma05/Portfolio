import React from "react"
import "./assets/css/Education.css"

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
function Education(){
    return(
        <div className="container">
            <div className="content education" onClick={closeSidebar}>
                <h2 className="red heading">Education</h2>
                <table>
                    <tbody>
                        <tr>
                            <td className="red bold institute">National Institute of Technology Hamirpur</td>
                            <th>Institute Name</th>
                            <td className="red bold institute">Chiranjiv Bharti School, Palam Vihar</td>
                        </tr>
                        <tr>
                            <td>Integrated (B.Tech + M.Tech) Dual Degree Course</td>
                            <th>Course</th>
                            <td>Senior Secondary Education</td>

                        </tr>
                        <tr>
                            <td>Computer Science and Engineering</td>
                            <th>Stream</th>
                            <td>Non Medical</td>
                        </tr>
                        <tr>
                            <td>May 2022</td>
                            <th>Date of Completion</th>
                            <td>May 2016</td>
                        </tr>
                        <tr>
                            <td>
                                Institute website: <a href="https://nith.ac.in" rel="noopener noreferrer" target="_blank">https://nith.ac.in</a>
                                <br/>
                                <a href="https://rohitkaushal7.github.io/nith-results/" target="_blank" rel="noopener noreferrer">Result CGPI: 9.19</a>
                            </td>
                            <th>Important Links</th>
                            <td>
                                Institute website <a href="https://pv.dpsg.org" rel="noopener noreferrer" target="_blank">https://pv.dpsg.org</a>
                                <br/>
                                Result: 91.8%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Education