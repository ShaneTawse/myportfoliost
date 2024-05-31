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
    <br></br>
    <h3>What Skills I Bring</h3>
 <span className="skillDesc">I am a skilled and passionate Software Engineering student with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and illustrator.</span> 
 {/* <div className="skillBar">
      <img src={ux} alt="UIDesign" className="skillBarImg" />
      <div className="skillBarText"> */}
      <br></br>
      <section >
       
      <h2>My List of Projects</h2>
      <div id="myProjects">
      <ul>
  
        <li><button type="button" onclick= {CAT}><a href={CAT}>Kitty Cat Selector</a></button></li>
        <li>Medical Alert Application</li>
        <li>Jumping Bug Game Application</li>
        <li>E-Commerce DataBase</li>
        <li>Photo Selecter</li>
        </ul>
        </div>
     
        <br></br>
        <h2>My Favourite Projects</h2><br></br>
        <div className="worksImgs">
                <h3>Jumping Bug Game</h3>
                <p>This was an individual project that I had finished for Web Developement.  I found it to be very challenging at first but by the end it helped to broaden
                    my knowledge on how to set the attributes intervals, taught me how to create and automatically update a leaderboard as an extra feature I encorporated into the project.</p>
                 <img src={BUG} alt="project1" className="projectImg" />
                 <br></br>
                 <br></br>
                 <h3>Kitty Cat Selector</h3>
                 <p>This was a very fun individual project for me as I am a natural lover of pets and animals.  This project taught me how to create a lightbox scroller that allowed the user
                    to scroll through n array of images, which also allowed for the user to click the thumnail to reveal a zoomed in image of the cat. If the user decided they liked the cat image
                    they then were able to click a button that allowed then to add the cat to there favourites section with a set limit allowed. If limit was reached the user would be promted to remove 
                    a cat to continue to add to their favourites list.
                 </p>
                 <img src={CAT} alt="project2" className="projectImg" />
                 <br></br>
                 <br></br>
                 <h3>SQL E-Commerce Database</h3>
                 <p>This was a very mind bending team of 2 project that I really enjoyed constructing. Being able to construct a database from the ground up allowed me to turn my focus to strict detailed work.
                    As a team we construced a e-commerce database and were able to go through a rigorous testing phase running queryies to provide the desired outcome.  I was able to see a e-commerce company from supplier to consumer and 
                    was able to see how the relationship between shipping, bussiness, and consumer through table manipulation. It was also fun to see how the tables could be joined through
                    primary  and forieng keys, and I found it very benifical to learn how a shopping cart can be created.
                 </p>
                 <img src={DB} alt="project3" className="projectImg" />     
                 <br></br>
                 <br></br>
                 <h3>Medical Alerts Application</h3>
                 <p>This was a team project that I also really enjoyed and was able to take on a leadership role to accomplish our goal. Being able to be the one setting up meetings and laing out the teams goals every week taught
                    me the art of being organized. I found my major takeaway from this project was the importance of accessibility. Making your application not only usable by your average person
                    but rather taking into consideration those who may have disabilities or imparements. It also forced us to dive into what type of programs we would need to Maker
                    it compatible on different platforms and divices.
                 </p>
                 <img src={MED} alt="project4" className="projectImg" />
                 <br></br>
                 <br></br>
                 <h3>API Photo Selector</h3>
                 <p>This was a small solo project that was fun and challenging for me to accomplish. By the end of this project I found my understanding for debbugging was taken to another level and 
                    I was able to learn how to fetch images from an external API for the first time.
                 </p>
                 <img src={PS} alt="project5" className="projectImg" />
               
                
             
             </div>




<button className="pipelineBtn" alt="myWork" ><a href="SoftwarePortfolio\components\Home.jsx">See Whats To Come</a></button>
{/* <button src={PDF} alt="nextUp" className="worksBtn" onclick={PDF} width="612px" height="791px"><a href=""> Click Here</a></button>
    <div id="pdfContainer"></div> */}
        
</section>
</main>
</>
}