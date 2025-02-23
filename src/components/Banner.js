import React from 'react'
import Header from './Header';
import Appointment from './Appointment';
import LawyerImage from '../assets/img/lawyer_banner.png';

const Banner = () => {
  return (
    <section id='home' className='lg:h-full lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0c8ac]'>
        <Header />
        <div className="container mx-auto h-full lg:flex pt-32">
            {/* left side */}
            <div className='text-center mx-auto  h-full lg:text-left px-8 md:p-0'>
                <h1 className='font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px]'>Your Problem <br/> <span className='text-accent'>Our Goal.</span></h1>
                <p className='max-w-sm mx-auto mb-[50px] lg:mx-0 lg:max-w-[540px]'>Welcome to our law firm! We provide expert legal services in Civil, Criminal, Family Law, Debt Recovery, Immigration, and more. Our experienced team is committed to delivering personalized, results-driven solutions to help you navigate your legal challenges with confidence.</p>
                {/* Appointment */}
                <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0'>
                    <Appointment />
                </div>
            </div>
            {/* right side */}
            <div className='hidden flex-1 lg:flex lg:flex-col items-end'>
                <img src={LawyerImage} alt="Welcome" />
            </div>
        </div>
    </section>
  )
}

export default Banner