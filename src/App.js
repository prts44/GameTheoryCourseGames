import NavBar from './NavBar.js';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Games from './components/Games.js';

function App() {
    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
