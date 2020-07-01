import React from 'react';
import '../App.css';
import Photo from "../images/amodimage.JPG";
import { GrDocumentText, GrMail } from 'react-icons/gr';
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';

const openFacebook = () => {
    window.open("https://www.facebook.com/profile.php?id=100009356262046");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/amodmathur1");
  };

  const openInstagram = () => {
    window.open("https://www.instagram.com/amodm104");
  };

  const openGithub = () => {
    window.open("https://www.github.com/amodmathur");
  };

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1gQdhsRukazwGP9lyRk8w5DVs-sHUOQ2r/view?usp=sharing");
  };

  const openEmail = () => {
    window.open("mailto: amodmathur104@gmail.com");
  };

function Home() {

return(
    <div className="main-content">
    <img className="profile-picture" src={Photo} alt="Amod" width="450" />
        <div className="right-home">
            <h1>Hey There! I'm Amod.</h1>
            <div className="logos">
            <h3> <FaFacebookF onClick={openFacebook}/> <FaLinkedinIn onClick={openLinkedin} /> <GrMail onClick={openEmail} /> <FaInstagram onClick={openInstagram}/>  <FaGithub onClick={openGithub}/>  <GrDocumentText onClick={openResume}/> </h3>
            </div>
            
        </div>
</div>
);

}

export default Home;
