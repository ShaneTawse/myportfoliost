//Shane Tawse, #301319122, Date: May 31, 2024
import HS from '../src/assets/thumbnail_IMG_3041.jpg';
import PDF from '../src/assets/Shane Tawse Resume Master.pdf'
export default function About(){
    return <>
    
    <section id="aboutMe">
    <h1>About Page</h1>
    <p>Hello, my name is <strong>Shane Tawse</strong></p>
    <img src= {HS} alt="headShot" className="portrait" width="640px" height="497px"/>
    <p>During my journey in software engineering, I have had the pleasure of tackling many challenging projects. My education allowed me to learn from some of the great programming minds in the industry, and I enjoyed working on complex issues with my peers. As a recent graduate with a Software Engineering Technician degree, I have developed a robust foundation in computer programming principles and a passion for creating innovative software solutions. My journey through college was marked by a commitment to learning and growth, both academically and through hands-on projects.
        Throughout my studies, I honed my skills in various programming languages, development frameworks, and software development methodologies. I had the opportunity to work on diverse projects, ranging from web applications to mobile apps, which allowed me to apply my knowledge in real-world scenarios and collaborate effectively within team environments.</p>

 
        <h2 className="hardWork">Check Me Out</h2>
        <span className="workPride">I am driven, and take pride in my work.  I look forward to bringing my skills and experience to help businesses achieve their goals.</span> <br></br>
        <br></br>
    <button src={PDF} alt="resume" className="resumeBtn" onclick={PDF} width="612px" height="791px"><a href="../src/assets/Shane Tawse Resume Master.pdf"> Click here to check out my resume</a></button>
    <div id="pdfContainer"></div>
       
     </section>
 <script>
 </script>

    </>
}