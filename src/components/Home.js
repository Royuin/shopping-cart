import '../styles/Home.css';
import greenField from '../assets/green-grass-field.jpeg';
import jasmineLeaves from '../assets/jasmine-leaves.jpeg';
import blackLeaves from '../assets/black-tea-leaves.jpg';
import chamomileLeaves from '../assets/chamomile-leaves.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <header className='home-header'>
        <img className='home-header-img' src={greenField} alt='Person standing green plant field' />
        <div className='home-img-text'>
          <p className='support-health'> <em> Support your health </em> </p>
          <h2> Only the finest of matcha and teas.</h2>
          <Link to='/products' className='home-shop-now'>Shop Now</Link>
        </div>
      </header>
      <main>
        <section>
          <h2 className='top-sellers-heading'> Our Top Sellers </h2>
          <div className='top-sellers'>
            <div className='seller1'>
              <img className='seller-img' src={chamomileLeaves} alt='Matcha powder in spoon sitting on top of green leaves' />
            </div>
            <div className='seller2'>
              <img className='seller-img' src={jasmineLeaves} alt='Dried jasmine tea leaves' />
            </div>
            <div className='seller3'>
              <img className='seller-img' src={blackLeaves} alt='Dried black tea leaves' />
            </div>
          </div>
        </section>
        <section className='why-us-section'>
          <h2 className='why-us-heading'> Why Us? </h2>
          <div className='why-us-wrapper'>
            <h4>You see this is where text would go to explain why but, this company doesn't actually exist. So here is placeholder text!</h4>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='learn-button'>Learn More</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home;
