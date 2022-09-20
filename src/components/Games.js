import style from '../styles/Game.module.css';
import { Link } from 'react-router-dom';

function Games(props) {
    return (
        <div id="container" className={style.container}>
            <h1 id="mainHeader" className={style.mainHeader}>Games</h1>
            <div id="content" className={style.content}>
                <div className={style.game}>
                    <Link to="/games/TwoThirdsAverage">Two Thirds Average</Link>
                </div>
            </div>
        </div>
    );
}

export default Games;