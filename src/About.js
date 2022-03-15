import React from 'react';
import './About.css';

function About(){
    return(
        <div className="aboutPage">
            <div className="spacer"></div>

            <img src={"images/meCollage2TP.png"} alt="its like me a hundred times lol"  className="collage"/>

            

            <div className="content">
                <h1>ABOUT WILL</h1>

                <h2>PROFESSIONALLY</h2>
                <p>
                    In the workplace, Will is a highly motivated, collaborative, and creative individual.  
                    He graduated from Endicott College in May 2021 with a Bachelors Degree in Computer Science and a minor in Graphic Design.
                    As of 2022, he has worked three great internships that were primarily focused on Front End Development, UI/UX Design, and 
                    even 3D Printing.  Currently, he is looking for employment with a company focused on delivering a product or service in need of 
                    a good UI/UX Engineer or Front End Engineer.  He plans to be a lead UI/UX Designer in the next five to ten years, and just needs to
                    get his foot in the door to really prove himself.  
                </p>

                <h2>PERSONALLY</h2>
                <p>
                    Outside of the workplace, Will tries to keep himself busy focusing on other things that he loves.  In the collage on the left,
                    you may see many different characters from video games, cartoons, comics, and much more.  Fighting Games are a big part of Will's life,
                    being the main place he branches out in the community, through teaching, working on projects, or just having fun.  Will also does freelance work 
                    for the local Fighting Game Community (FGC), in the forms of graphic design and video work.  On top of that, he is also working on his own games
                    in Unity, building his own brand, and constantly working to avoid the dreaded nine to five eventually.  Below are his socials, feel free to connect
                    with him on any of those platforms.
                </p>

                <ul className="buttons">
                    <li><a href="./files/willHallerTraits.pdf" download="willHallerTraits">TRAITS</a></li>
                    <li><a href="./files/willHaller_resume.pdf" download="willHallerResume">RESUME</a></li>
                    <li><a href="/">HOME</a></li>
                </ul>

                <ul className="socials">
                    <li>
                        <a href="https://rateyourmusic.com/~_wheel_">
                            <img src={"images/rym.png"} alt="The RateYourMusic Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://letterboxd.com/wheel_/">
                            <img src={"images/letterboxd-mac-icon.png"} alt="The Letterboxd Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/wheelwastaken">
                            <img src={"images/github.png"} alt="The GitHub Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/will-haller/">
                            <img src={"images/linkedin.png"} alt="The LinkedIn Logo" />
                        </a>
                    </li>
                </ul>

                
            </div>
            
        </div>
    );
}

export default About;