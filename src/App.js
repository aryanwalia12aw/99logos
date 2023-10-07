import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Cards from './Component/Cards';
import Carousal from './Component/Carousal';

function App() {
  return (
    <div className="App">
<Navbar/>
<Home/>
<Cards/>
<Carousal/>
    </div>
  );
}

export default App;
