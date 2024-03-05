import logo from '../shared/images/logo.svg';
import './App.css';
import Home from './Home/Home.js';

function App() {
  return (
    <div className="App">
      // Aquí añadimos el componente Header.
      <Header title="Welcome to ReactApp by juanxbini" />
      <Home />
    </div>
  );
}

export default App;
