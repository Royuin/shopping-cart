import '../styles/About.css';
// import workerTeaPlantation from '../assets/worker-tea-plantation.jpg';

function About() {
  return (
    <>
      <header className='about-header'>
        {/* <img
          className='about-header-img'
          src={workerTeaPlantation}
          alt='Worker in tea plantation'
        /> */}
        <div className='about-img-text'>
          <h3>About us</h3>
        </div>
      </header>
      <main className='about-main'>
        <div className='about-main-heading-text'>
          <h4>Why our teas?</h4>
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{' '}
          </p>
          <br />
          <p>
            At auctor urna nunc id cursus metus. Quis enim lobortis scelerisque
            fermentum dui faucibus in ornare quam. Urna id volutpat lacus
            laoreet non curabitur gravida arcu. Eu consequat ac felis donec et
            odio pellentesque. Diam maecenas ultricies mi eget mauris pharetra
            et. Et malesuada fames ac turpis egestas sed. Ipsum dolor sit amet
            consectetur adipiscing elit duis.
          </p>
          <p>
            At auctor urna nunc id cursus metus. Quis enim lobortis scelerisque
            fermentum dui faucibus in ornare quam. Urna id volutpat lacus
            laoreet non curabitur gravida arcu. Eu consequat ac felis donec et
            odio pellentesque. Diam maecenas ultricies mi eget mauris pharetra
            et. Et malesuada fames ac turpis egestas sed. Ipsum dolor sit amet
            consectetur adipiscing elit duis.
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
