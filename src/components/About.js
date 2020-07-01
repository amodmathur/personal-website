import React from 'react';
import '../App.css';
import model from '../images/model.jpeg';
import newYork from '../images/newyork.jpg';
import quest from '../images/questimage.JPG';
import scholars from '../images/scholarsimage.JPG';
import self from '../images/selfimage.jpg';
import ladiesman from '../images/ladiesman.JPG';
import family from '../images/family.jpg';
import terp1 from '../images/terp1.JPG';
import terp2 from '../images/terp2.JPG';


function About() {
    return(
        <>
        <div className="about-text">
            <h1>Who is Amod?</h1>
            <p> I'm a third-year Computer Science student at the University of Maryland, College Park.
                I code, solve Rubik's Cubes, play table tennis, and socialize. Take a look at some of my involvements and my life:
            </p> 
            <div className="about-images">
                <img src={model} alt="Amod" width="400"/>
                <img src={newYork} alt="Amod" width="400"/>
                <img src={ladiesman} alt="Amod" width="400"/>
            </div>

            <div>
                <img src={terp1} alt="Amod" width="400"/>
                <img src={scholars} alt="Amod" width="400"/>
                <img src={self} alt="Amod" width="400"/>
            </div>

            <div>
                <img src={quest} alt="Amod" width="400"/>
                <img src={terp2} alt="Amod" width="400"/>
            </div>
        </div>

        <ul id="rig">
            <li>
                <img className="rig-img" src={quest} alt="quest"/>
                <span className="rig-overlay"></span>
                <span className="rig-text">This is QUEST!</span>
            </li>

            <li>
                <img className="rig-img" src={terp2} alt="quest"/>
                <span className="rig-overlay"></span>
                <span className="rig-text">I'm a Terp!</span>
            </li>

            <li>
                <img className="rig-img" src={newYork} alt="quest"/>
                <span className="rig-overlay"></span>
                <span className="rig-text">I'm in New York!</span>
            </li>
        </ul>

      

       </>
    );
}

export default About;