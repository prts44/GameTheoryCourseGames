import NavBar from './NavBar.js';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Games from './components/Games.js';
import TwoThirdsAverage from './components/games/TwoThirdsAverage.js';

function App() {
    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/games/TwoThirdsAverage" element={<TwoThirdsAverage />}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
