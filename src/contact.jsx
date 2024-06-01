
import '../src/contact.css'
export default function Contact(){
    return<>

    <main>
    <h1 id="page">Contacts Page</h1>
    <p>I'm only an email, phone call or text message away. Lets start a conversation!.  Feel free to contact me for more information</p>
     
        <h2 id="social">My Contact and Socials</h2> 
        <div id="contactPanel">
            <p>A list of available contact options. Please take the time and reach out</p>
          
                
                <p><strong>My Name:</strong>  Shane Tawse</p>
                <p><strong>My Email:</strong> shanetawse@msn.com</p>
                <p><strong>My Phone #:</strong> 905-407-6029</p>
           
            </div>
    </main>
        <div class="contact-form">
    <h2>Contact Form</h2>
    <form id="contactForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required></input>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required></input>
        <label for="message">Message</label>
        <textarea id="message"  name="message" rows="4" required></textarea>
        <br></br>
        <br></br>
        </form>
        </div>

        <button type="button" alt="contactMe" class= "button"  width="612px" height="791px"><a href="./components/about.jsx">Click To Submit</a> </button>
    <div id="letsTalkContainer"></div>


    </>

}