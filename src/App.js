import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import LiveAuctions from './pages/LiveAuctions';
import { Login } from './pages/Login';
import Upcoming from './pages/Upcoming';
import Contact from './pages/Contact';
import About from './pages/About';
import AuctionRegister from './pages/AuctionRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/LiveAuctions" element={<LiveAuctions />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Upcoming" element={<Upcoming />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/AuctionRegister" element={<AuctionRegister />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
