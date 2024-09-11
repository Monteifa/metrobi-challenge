// import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // useEffect(() => {
  //   question1(array);
  // }, []);

  return (
    <div className='teste'>
      <div className='header'>header</div>

      <div className='main'>
        <div style={{ width: '40%' }}>
          <div className='hero'>hero</div>
          <div className='side_bar'>side bar</div>
        </div>

        <div style={{ width: '60%' }}>
          <div className='main_content'>main content</div>

          <div className='extra_content'>extra content</div>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div className='related_images'>related images</div>
        <div className='related_posts'>related posts</div>
      </div>
      <div className='footer'>footer</div>
    </div>
  );
}

export default App;
