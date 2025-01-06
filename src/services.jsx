//Shane Tawse, #301319122, Date: May 31, 2024
import Pro from '../src/assets/programming.gif'
import data from'../src/assets/data-architecture.gif'
import upTop from '../src/assets/structure.gif'
import handUp from '../src/assets/student.gif'
import aTeam from '../src/assets/paint-brush.gif'
import '../src/services.css'

export default function Services(){
    return<>
    <h1>Services Page</h1>
    <section>
   
   <div id="skills">
        <li>Programming Knowledge&nbsp;<img src= {Pro} alt="comp" className="mySkills" width="50px" height="50px"/></li><br></br>
        <p>From Front-end to Back-end and everything in between.</p>
        <li>Data-Architecture&nbsp;<img src={data} alt="sql" className="mySkills" width="50px" height="50px"/></li><br></br>
        <p>Structure and maintain databases</p>
        <li>Structured, with Leadership Qualities, and Values Teamwork&nbsp;<img src={upTop} alt="medal" className="mySkills" width="50px" height="50px"/></li><br></br>
        <p>The go to when problems need solving</p>
        <li>Constant Learner&nbsp;<img src={handUp} alt="question" className="mySkills" width="50px" height="50px"/></li><br></br>
        <p>From new technologies to new software programs, I can learn them all.</p>
        <li>Eye for deatail&nbsp;<img src={aTeam} alt="focus" className="mySkills" width="50px" height="50px"/></li><br></br>
        <p>Leaves no stone unturned when assessing and solving business solutions.</p>
   
</div>
</section>
     </>
}