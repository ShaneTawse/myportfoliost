//Shane Tawse, #301319122, Date: May 31, 2024
import '../src/contact.css';
import emailjs from 'emailjs-com';
import React from 'react';

export default function Contact() {
    function sendEmail(e) {
        e.preventDefault(); // Prevents the form from refreshing the page

        emailjs.sendForm('service_44q4vcl', 'template_bwz0g68', e.target, 'TSADODDjMThi9-DHc')
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send message: ' + error.text);
            });
    }

    return(
        <>
            <main>
                <h1 id="page">Contacts Page</h1>
                <p>I'm only an email, phone call, or text message away. Let's start a conversation! Feel free to contact me for more information.</p>

                <h2 id="social">My Contact and Socials</h2>
                <div id="contactPanel">
                    <p>A list of available contact options. Please take the time and reach out.</p>

                    <p><strong>My Name:</strong> Shane Tawse</p>
                    <p><strong>My Email:</strong> tawseshane@gmail.com</p>
                    <p><strong>My Phone #:</strong> 905-407-6029</p>
                </div>
            </main>

            <div className="contact-form">
                <h2>Contact Form</h2>
                <form id="contactForm" onSubmit={sendEmail}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <br></br>
                    <br></br>

                    <button type="submit" className="button" width="612px" height="791px">Click To Submit</button>
                </form>
            </div>

            <div id="letsTalkContainer"></div>
        </>
    );
}
