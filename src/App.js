import NavBar from './NavBar.js';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';

function App() {
    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/games" element={<h1>Games</h1>} />
                    <Route path="/about" element={<h1>About</h1>} />
                </Routes>
            </div>
        </>
    );
}

export default App;
