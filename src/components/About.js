import style from '../styles/About.module.css';

function About(props) {
    return (
        <div id="container" className={style.container}>
            <h1 id="mainHeader" className={style.mainHeader}>About</h1>
            <div id="content" className={style.content}>
                <p>
                    This is a collection of the tools and simulations I used to determine my strategy for 
                    each game in ECON 212: Introduction to Game Theory. This site is meant to double as a personal
                    web dev project and a way for me to develop my strategies for the weekly games in ECON 212. For
                    more info on the course, check the UWFlow page.
                </p>
                <h2>
                    When will each game's tools be released?
                </h2>
                <p>
                    Each game's tools will be released one week after each game is given to the class, which
                    will be two days after we all receive our marks and the in class discussion has happened. 
                    For more info, check the Games page.
                </p>
                <h2>
                    Who are you?
                </h2>
                <p>
                    My name is Ryan Chong-Kit. I'm a third year Honours Mathematics student at the University of Waterloo
                    planning on majoring in Statistics. If you care enough, I'll have a link to my own website for more
                    info when I actually make that.
                </p>
                <h2>
                    How long will the website be up? Are you allowed to share this publicly? 
                </h2>
                <p>
                    The website will be up until the end of the Fall 2022 term. As for whether or not I'm
                    allowed to share these tools publicly, I have yet to ask professor Joel Blit. Right now,
                    this site contains no tools or information about the games. I will ask for permission
                    beforehand as well as what I'm allowed to put here.
                </p>
                <h2>
                    Would you recommend taking ECON 212?
                </h2>
                <p>
                    At the time of writing this, we are at the start of the term. My opinion will obviously change
                    with time, but so far I think the course is interesting and engaging with professor Joel Blit.
                    I would recommend it for now but I'll definitely update this as the term progresses.
                </p>
            </div>
        </div>
    );
}

export default About;