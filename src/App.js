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
            <li><a href="about.html">About Us</a></li>
            <li><a href="clients.html">Our Clients</a></li>
            <li><a href="products.html">Our Products</a></li>
            <li><a href="services.html">Our Services</a></li>
            <li><a href="contact.html">Contact Us</a></li>
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
