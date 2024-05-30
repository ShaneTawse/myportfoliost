import '../src/index.css'
import '../src/project.css'
import BUG from '../src/assets/Screenshot 2024-05-29 191704.png';
import CAT from '../src/assets/Screenshot 2024-05-29 191620.png';
import DB from '../src/assets/Screenshot 2024-05-29 192150.png';
import MED from '../src/assets/Screenshot 2024-05-29 192016.png';
import PS from '../src/assets/Screenshot 2024-05-29 191740.png';
export default function Projects(){
    return <>

    <main>
    <h1>Projects Page</h1>
   



<section id="myHardWork">
        
<h2 className="hardWork">About Me</h2>
<span className="workPride">I take pride in paying attention to the smallest details and making sure my work is pixel perfect/ 
I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span> 
<br></br>
<h2>My Projects</h2>
<div className="worksImgs">
        <h3>Jumping Bug Game</h3>
         <img src={BUG} alt="project1" className="projectImg" />
         <br></br>
         <h3>Kitty Cat Selector</h3>
         <img src={CAT} alt="project2" className="projectImg" />
         <br></br>
         <h3>SQL E-Commerce Database</h3>
         <img src={DB} alt="project3" className="projectImg" />     
         <br></br>
         <h3>Medical Alerts Application</h3>
         <img src={MED} alt="project4" className="projectImg" />
         <br></br>
         <h3>API Photo Selector</h3>
         <img src={PS} alt="project5" className="projectImg" />
       
        
     
     </div>

{/* <button className="pipelineBtn">See Whats To Come</button> */}
        
        
</section>
</main>
</>
}