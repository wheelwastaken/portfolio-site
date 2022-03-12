import React from 'react';
import './Home.css';


function Home(){
    return(
        <div className = "jumbotron">
            <div className="spacer"></div>
        
            <div className="selfPortrait">
                <img src={"images/meDoinVideoTP.png"} alt="Will doing camera work"  className="leftPicture"/>
            </div>

            <h1>WILL HALLER</h1>
            <p><i>22</i> | <i>He / They</i> | <i>Programmer</i> | <i>Graphic Designer</i> | <i>Video Editor</i></p>

            <nav className="grid-container">
                <div id="videoSquare"><a href="https://willhaller10.myportfolio.com/videos">VIDEOS</a></div>
                <div id="posterSquare"><a href="https://willhaller10.myportfolio.com/posters">POSTERS</a></div>
                <div id="commissionSquare"><a href="https://willhaller10.myportfolio.com/commisssioned-work">COMMISSION<br></br>WORK</a></div>
                <div id="aboutSquare"><a href="https://willhaller10.myportfolio.com/commisssioned-work">ABOUT WILL</a></div>
                <div id="musicSquare"><a href="https://willhaller10.myportfolio.com/designing-for-music">DESIGN<br></br>FOR<br></br>MUSIC</a></div>
                <div id="webSquare"><a href="https://willhaller10.myportfolio.com/web-design-and-development">UI/UX<br></br>DESIGN</a></div>
                <div id="miscSquare"><a href="/">MISC. WORK</a></div>
                <div id="resumeSquare"><a href="/resume">RESUME</a></div>
            </nav>

            <div className="spacer"></div>
        </div>
    );
}

export default Home;