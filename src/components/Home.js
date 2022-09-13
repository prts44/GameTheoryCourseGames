import style from '../styles/Home.module.css';
import { Link } from 'react-router-dom';
import dice from './royalty-free-dice.png';

function Home(props) {
    return (
        <div id="container" className={style.container}>
            <div id="welcomePanel" className={style.welcomePanel}>
                <div id="leftSide" className={style.leftSide}>
                    <img src={dice} alt="Two red dice" className={style.image}/>
                </div>
                <div id="rightSide" className={style.rightSide}>
                    <h1>Game Theory Course Games</h1>
                    <h3>A collection of simulations/tools I used for the games in ECON 212</h3>
                    <Link className={style.linkButton} to="/games">See the games</Link>
                    <a className={style.linkButton} href="https://uwflow.com/course/econ212">ECON 212 on UWFlow</a>
                </div>
            </div>
        </div>
    )

}

export default Home;

