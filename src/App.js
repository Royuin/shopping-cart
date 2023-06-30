import './App.css';
import logoOutline from './assets/logo-with-outline.png';
import shoppingIcon from './assets/shopping-outline.svg';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
        <nav>
        <div className='left-nav'>
        <img className='header-logo' src={logoOutline} alt='Logo of a tea kettle with matcha tea on the side.' />
        <h1> Reverie Tea </h1>
        </div>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li><img className='shopping-icon' src={shoppingIcon} alt='icon of shopping bag' /></li>
          </ul>
        </nav>
      <Home />
    </div>
  );
}

export default App;
