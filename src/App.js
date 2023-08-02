import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          <ul>
            <li><strong>Home</strong></li>
            <li><a href="about.html">About</a></li>
            <li><a href="modifications.html">Modification Requests</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
      </nav>
        <p>
          dinsmooramplification.com is under construction. Check back later!
        </p>
      </header>
    </div>
  );
}

export default App;
