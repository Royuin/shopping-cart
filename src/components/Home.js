import '../styles/Home.css';
import greenField from '../assets/green-grass-field.jpeg';
import jasmineLeaves from '../assets/jasmine-leaves.jpeg';
import blackLeaves from '../assets/black-tea-leaves.jpg';
import chamomileLeaves from '../assets/chamomile-leaves.jpg';

function Home() {
  return (
    <>
      <header className='home-header'>
        <img className='home-header-img' src={greenField} alt='Person standing green plant field' />
        <div className='home-img-text'>
          <p className='support-health'> <em> Support your health </em> </p>
          <h2> Only the finest of matcha and teas.</h2>
          <button className='home-shop-now'>Shop Now</button>
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
      </main>
    </>
  )
}

export default Home;
