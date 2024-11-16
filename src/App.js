import React from 'react';

// import components
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Team from './components/Team';
import Newsletter from './components/Newsletter';

const App = () => {
  return <div>
    <Banner />
    <Testimonials />
    <Skills/>
    <Team />
    <Newsletter />
    <div className='h-[2000px]'></div>
  </div>;
};

export default App;
