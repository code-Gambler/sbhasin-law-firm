import React from 'react'
import { social } from '../data'

const Contact = () => {
  return (
    <section
      id='contact'
      className='bg-primary text-white section py-24'
    >
      <div className='container mx-auto text-center'>
        <h2 className='text-5xl font-primary font-extrabold mb-6'>
          Contact Us
        </h2>

        <p className='max-w-[720px] mx-auto px-6 lg:px-0 mb-12 leading-relaxed'>
          <strong>S. Bhasin & Associates</strong> is a law firm based in Dwarka, New Delhi,
          providing legal services across a wide range of practice areas. The firm
          regularly handles matters before all District Courts of Delhi, the High Court
          of Delhi, and the Supreme Court of India. With a client-focused approach, the
          firm represents individuals and businesses in litigation, advisory, and
          dispute resolution matters. S. Bhasin & Associates is committed to delivering
          practical legal solutions with professionalism, integrity, and diligence.
        </p>

        {/* Contact Details */}
        <div className='max-w-[720px] mx-auto text-left bg-white/10 rounded-sm p-6 mb-12'>
          <p className='mb-3'>
            <span className='font-semibold'>Address:</span><br />
            Shop No. 2/12, Mall Road, Old Market, New Market, Block 2,<br />
            Tilak Nagar, New Delhi, Delhi – 110018, India
          </p>

          <p className='mb-2'>
            <span className='font-semibold'>Phone:</span>{' '}
            <a
              href='tel:+919899331166'
              className='underline hover:text-accent transition'
            >
              +91 98993 31166
            </a>
          </p>

          <p>
            <span className='font-semibold'>Email:</span>{' '}
            <a
              href='mailto:sauravbhasin10@gmail.com'
              className='underline hover:text-accent transition'
            >
              sauravbhasin10@gmail.com
            </a>
          </p>
        </div>

        {/* socials */}
        <div className='flex items-center justify-center gap-6'>
          {social.map((item, index) => {
            const { icon, link } = item
            return (
              <a
                key={index}
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:opacity-80 transition'
              >
                <img src={icon} alt='social link' />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
