import { Link } from 'react-router-dom';
import cartIcon from '../assets/green-cart.png';
import logoOutline from '../assets/logo-with-outline.png';
import hamburgerMenu from '../assets/hamburger-menu.svg';
import '../styles/Navbar.css';
import { useState } from 'react';

function Navbar({ cartLength, toggleProductsDropdown, dropdown }) {
  const [mobileOverlay, setMobileOverlay] = useState(false);

  function displayMobileOverlay() {
    setMobileOverlay(true);
  }

  function hideMobileOverlay() {
    setMobileOverlay(false);
  }

  function renderCartLink() {
    if (cartLength > 0) {
      return (
        <li className='cart-icon-wrapper'>
          <Link to='/cart' className='cart-link'>
            <p>{cartLength}</p>
            <img
              className='shopping-icon'
              src={cartIcon}
              alt='icon of a green shopping cart'
            />
          </Link>
        </li>
      );
    }
    return (
      <li className='cart-link'>
        <Link to='/cart'>
          <img
            className='shopping-icon'
            src={cartIcon}
            alt='icon of a green shopping cart'
          />
        </Link>
      </li>
    );
  }

  function renderHamburgerMenu() {
    if (mobileOverlay === false) {
      return (
        <button className='hamburger-menu' onClick={displayMobileOverlay}>
          <img src={hamburgerMenu} alt='' />
        </button>
      );
    } else if (mobileOverlay === true) {
      return (
        <button className='hamburger-menu' onClick={hideMobileOverlay}>
          X
        </button>
      );
    }
  }

  function renderMobileOverlay() {
    if (mobileOverlay === true) {
      return (
        <div className='mobile-overlay'>
          <ul className='mobile-links'>
            <li>
              <Link to='/' onClick={hideMobileOverlay}>
                Home
              </Link>
            </li>
            <li className='products-dropdown-wrapper'>
              <button
                className='nav-products-button'
                onClick={toggleProductsDropdown}
              >
                Products
              </button>
              <ul className={'products-dropdown ' + dropdown}>
                <li>
                  <Link to='/products' onClick={hideMobileOverlay}>
                    All Products
                  </Link>
                </li>
                <li>
                  <Link to='/products/green-tea'>Green Tea</Link>
                </li>
                <li>
                  <Link to='/products/matcha' onClick={hideMobileOverlay}>
                    Matcha
                  </Link>
                </li>
                <li>
                  <Link to='/products/black-tea' onClick={hideMobileOverlay}>
                    Black Tea
                  </Link>
                </li>
                <li>
                  <Link to='/products/herbal-tea' onClick={hideMobileOverlay}>
                    Herbal Tea
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/about' onClick={hideMobileOverlay}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
      );
    }
    return;
  }

  return (
    <>
      {' '}
      <nav className='site-nav' aria-label='site'>
        <div className='left-nav'>
          <img
            className='header-logo'
            src={logoOutline}
            alt='Logo of a tea kettle with matcha tea on the side.'
          />
          <h1> Reverie Tea </h1>
        </div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='products-dropdown-wrapper'>
            <button
              className='nav-products-button '
              onClick={toggleProductsDropdown}
            >
              Products
            </button>
            <ul className={'products-dropdown ' + dropdown}>
              <li>
                <Link to='/products'>All Products</Link>
              </li>
              <li>
                <Link to='/products/green-tea'>Green Tea</Link>
              </li>
              <li>
                <Link to='/products/matcha'>Matcha</Link>
              </li>
              <li>
                <Link to='/products/black-tea'>Black Tea</Link>
              </li>
              <li>
                <Link to='/products/herbal-tea'>Herbal Tea</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          {renderCartLink()}
        </ul>
      </nav>
      <nav className='mobile-site-nav'>
        <div className='left-nav'>
          <img
            className='header-logo'
            src={logoOutline}
            alt='Logo of a tea kettle with matcha tea on the side.'
          />
          <h1> Reverie Tea </h1>
        </div>
        <div className='right-nav'>
          {' '}
          {renderCartLink()}
          {renderHamburgerMenu()}
        </div>
      </nav>
      {renderMobileOverlay()}
    </>
  );
}

export default Navbar;
