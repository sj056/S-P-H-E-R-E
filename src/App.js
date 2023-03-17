import 'bootstrap/dist/css/bootstrap.min.css';

// @import "~bootstrap/scss/bootstrap";
import './App.scss'
import About from './pages/About';
import Footer from './pages/Footer';
import NavBar from './pages/Nav';
import StickyHeader from './pages/StickyHeader';
function App() {
  return (
    <div>
      <NavBar/>
      <StickyHeader/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
