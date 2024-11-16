import React from 'react';

// import components
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';

const App = () => {
  return <div>
    <Banner />
    <Testimonials />
    <div className='h-[2000px]'></div>
  </div>;
};

export default App;
