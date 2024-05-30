import HS from '../src/assets/thumbnail_IMG_3041.jpg';
import PDF from '../src/assets/shane_res.pdf'
export default function About(){
    return <>
    
    
 
    
    <section id="aboutMe">
    <h1>About Page</h1>
    <p>Hello, my name is Shane Tawse</p>
    <img src= {HS} alt="headShot" className="portrait" width="640px" height="497px"/>
    <p>During my Software Engineering journey I have had the pleasure of tackling many challenging projects.  My education has allowed me to learn from some of the great
        programming minds available. It has also allowed me the ability to work with some great and hardworking peers about to enter the industry.
    </p>
    <button src={PDF} alt="resume" className="resumeBtn" onclick={PDF} width="612px" height="791px"><a href="../src/assets/shane_res.pdf"> Click here to check out my resume</a></button>
    <div id="pdfContainer"></div>
       
        <span className="skillTitle">What Skills I Bring</span><br></br>
 <span className="skillDesc">I am a skilled and passionate Software Engineering student with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and illustrator.</span> 
 {/* <div className="skillBar">
      <img src={ux} alt="UIDesign" className="skillBarImg" />
      <div className="skillBarText"> */}
      <h2>My List of Projects</h2>
      <ul>
        <li>Kitty Cat Selector</li>
        <li>Pet Adoption Application</li>
        <li>Medical Alert Application</li>
        <li>Jumping Bug Game Application</li>
        <li>E-Commerce DataBase</li>
        <li>Photo Selecter</li>
        <li>Multiplication Table Generator</li>
        </ul>
      {/* </div>

 </div>  */}
     </section>
  
 <script>
    
    {/* document.getElementBYID('resumeBtn').addEventListner('click', function(){
    var resume = '../src/assets/shane_res.pdf';

var PDF = '<embed src="' + resume + '" width="612xpx" height="791" type="application/pdf">'</embed>;

document.GetElementByID('pdfContainer').innerHTML =pdfEmbed;

 }); */}

 </script>

    </>
}