// adapted from this tutorial:
// https://www.youtube.com/watch?v=SLfhMt5OUPI

import style from './styles/NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar(props) {
    return <nav className={style.navBar}>
        <Link to="/" className={style.logo}>GTCG</Link>
        <ul>
            <li>
                <Link to="/games">Games</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <a href="https://github.com/prts44/GameTheoryCourseGames">Source Code</a>
            </li>
        </ul>
    </nav>
}

export default NavBar