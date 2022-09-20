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
                    info once that is complete.
                </p>
                <h2>
                    How long will the website be up? Are you allowed to share this publicly? 
                </h2>
                <p>
                    The website will be up until the end of the Fall 2022 term. I have received permission from professor
                    Joel Blit to host these tools publicly. However, I will not be sharing the outcomes of the games, as
                    the professor has asked everyone not to do that to keep the course fair for future terms.
                </p>
                <h2>
                    Would you recommend taking ECON 212?
                </h2>
                <p>
                    It's only the beginning of the term so I can't give a fair opinion right now. Check the UWFlow
                    page and make a judgement based off of that instead.
                </p>
            </div>
        </div>
    );
}

export default About;