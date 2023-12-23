import './App.css';
import NavBar from './components/navigationBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './view/home';

function App() {
  return (
    <div className="App">
      <NavBar />      
      <Home />
      <Footer />
    </div>
  );
}

export default App;
