/* global Email */
import { useEffect } from "react";
import profilepicture from "../images/profil-bild.jpg";

function sendEmail(e) {
  e.preventDefault();
  Email.send({
    Host: "smtp.elasticemail.com",
    Port: "2525",
    Username: "lukas99o@hotmail.com",
    Password: "9E7AFAB244BC3645A98677A7313C01BCF635",
    To: "lukas99o@hotmail.com",
    From: document.getElementById("email").value,
    Subject: "Email from Portfolio Website!",
    Body: "Name: " + document.getElementById("name").value
      + "<br> Email: " + document.getElementById("email").value
      + "<br> Phone number: " + document.getElementById("phone").value
      + "<br> <br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message Sent Successfully")
  );
  e.target.reset();
}

function Contact() {
  useEffect(() => {
    const partyButton = document.getElementById('partyButton');
    const partyMusic = document.getElementById('partyMusic');
    const contactBody = document.querySelector('.contact-body');

    let intervalId;

    const handlePartyClick = () => {
      if (!intervalId) {
        partyMusic.play();

        const getRandomColor = () => {
          const letters = '0123456789ABCDEF';
          let color = '#';
          for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
        };

        intervalId = setInterval(() => {
          contactBody.style.background = getRandomColor();
        }, 500);

        partyButton.textContent = 'Stop Party!';
      } else {
        clearInterval(intervalId);
        contactBody.style.background = 'linear-gradient(to right, #001660, #0044cc)';
        partyMusic.pause();

        intervalId = null;
        partyButton.textContent = 'Start Party!';
      }
    };

    if (partyButton) {
      partyButton.addEventListener('click', handlePartyClick);
    }

    // Cleanup function
    return () => {
      if (partyButton) {
        partyButton.removeEventListener('click', handlePartyClick);
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div className="contact-body">
      <div className="contact-container">
        <form onSubmit={sendEmail}>
          <h3>Contact Me!</h3>
          <img src={profilepicture} alt="Profile" />
          <input type="text" id="name" placeholder="Your Name" required />
          <input type="email" id="email" placeholder="Email Id" required />
          <input type="text" id="phone" placeholder="Phone no." required />
          <textarea id="message" rows="4" placeholder="Type any message to me!" />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="contact-fun">
        <button id="partyButton">Start Party!</button>
        <audio id="partyMusic" src="/audio/LEEONA_-_LEEONA_-_Do_I.mp3"></audio>
      </div>
    </div>
  );
}

export default Contact;
