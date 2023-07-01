import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import logoOutline from './assets/logo-with-outline.png';
import cartIcon from './assets/green-cart.png';
import Home from './components/Home';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
        <nav>
        <div className='left-nav'>
        <img className='header-logo' src={logoOutline} alt='Logo of a tea kettle with matcha tea on the side.' />
        <h1> Reverie Tea </h1>
        </div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/products'>Products</Link></li>
            <li>About Us</li>
            <li><img className='shopping-icon' src={cartIcon} alt='icon of shopping bag' /></li>
          </ul>
        </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <footer>
        <img src={logoOutline} alt='Logo of a tea kettle with matcha tea on the side.' />
      <h5>Reverie Tea</h5> 
        <p>Copyright &copy; <a href='https://github.com/Royuin'> Royuin </a></p>
        <a href="https://www.flaticon.com/free-icons/smart-cart" title="smart cart icons">Smart cart icons created by Muhammad_Usman - Flaticon</a>
        <br />
        <a href="https://www.flaticon.com/free-icons/matcha" title="matcha icons">Matcha icons created by amonrat rungreangfangsai - Flaticon</a>
      </footer>
    </div>
  );
}

export default App;
