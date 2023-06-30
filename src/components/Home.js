import '../styles/Home.css';
import greenField from '../assets/green-grass-field.jpeg';

function Home() {
  return (
    <header className='home-header'>
      <img className='home-header-img' src={greenField} alt='Person standing green plant field' />
      <div className='home-img-text'>
      <p className='support-health'> <em> Support your health </em> </p>
      <h2> Only the finest of matcha and green teas.</h2>
        <button className='home-shop-now'>Shop Now</button>
      </div>
    </header>
  )
}

export default Home;
