import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  const myWidth = 200
  return (
    <div className="App">
      <Navbar
        drawerWidth={myWidth}
        Content={
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        }
        />
    </div>
  );
}

export default App;
