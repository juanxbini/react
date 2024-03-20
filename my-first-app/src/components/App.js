import './App.css';
import Home from './Home/Home.js';
import Header from './layout/Header.js';
import Footer from './layout/Footer.js'
import Content from './layout/Content.js';
import Todo from './Todo/Todo'
import Timer from './Timer/Timer.js';
import Coins from './Coins/Coins.js';

function App() {
  return (
    <div className="App">

      <Header title="Welcome to ReactApp by juanxbini" />

      <Content>
        <Home />
      </Content>
      <Content>
        <Todo />
      </Content>
      <Content>
        <Timer />
      </Content>
      <Content>
        <Coins />
      </Content>

      <Footer />

    </div>
  );
}

export default App;
