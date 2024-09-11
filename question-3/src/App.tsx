import Header from './Components/Header';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <div className='main_container'>
        <div style={{ width: '40%' }}>
          <div className='hero'>Hero</div>
          <div className='side_bar'>Sidebar</div>
        </div>

        <div style={{ width: '60%' }}>
          <div className='main_content'>Main Content</div>

          <div className='extra_content'>Extra Content</div>
        </div>
      </div>

      <div className='section'>
        <div className='related_images'>Related Images</div>
        <div className='related_posts'>Related Posts</div>
      </div>

      <Footer />
    </>
  );
}

export default App;
