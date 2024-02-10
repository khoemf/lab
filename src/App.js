import logo from './logo.svg';
import About from './Components/About';
import Product from './Components/Product';
import Welcome from './Components/Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <About/>      
      <Product/>
      <Welcome/>
    </div>
  );
}

export default App;
