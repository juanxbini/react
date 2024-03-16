import './App.css';
import Home from './Home/Home.js';
import Header from './layout/Header.js';
import Footer from './layout/Footer.js'
import Content from './layout/Content.js';
import Todo from './Todo/Todo'

function App() {
  return (
    <div className="App">

      <Header title="Welcome to ReactApp by juanxbini" />

      <Content>
        <Todo />
      </Content>

      <Footer />

    </div>
  );
}

export default App;
