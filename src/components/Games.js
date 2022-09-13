import style from '../styles/Game.module.css';

function Games(props) {
    return (
        <div id="container" className={style.container}>
            <h1 id="mainHeader" className={style.mainHeader}>Games</h1>
            <div id="content" className={style.content}>
            </div>
        </div>
    );
}

export default Games;