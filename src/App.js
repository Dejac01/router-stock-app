
import './App.css';
import { Route, Routes } from "react-router-dom";
import Stocks from "./components/Stocks";
import Nav from './components/Nav';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import About from "./components/About";

function App(props) {
  return (
    <div className="App">
    <Nav/>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/stocks" element={<Dashboard/>}/>
  <Route path="/stocks/:symbols" element={<Stocks/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
    </div>
  );
}

export default App;
