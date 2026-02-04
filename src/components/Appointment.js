import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Appointment = () => {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          formRef.current.reset()
        },
        (error) => {
          console.error(error)
          alert('Something went wrong. Please try again.')
        }
      )
  }

  return (
    <div className='bg-accent w-full p-8 rounded-sm max-w-[22rem] md:max-w-md mx-auto'>
      <h3 className='text-white text-[28px] font-bold tracking-[0.3px] text-center'>
        Get an appointment
      </h3>
      <div className='w-[54px] h-[3px] bg-white my-6 mx-auto'></div>

      {/* form */}
      <form ref={formRef} onSubmit={sendEmail} className='space-y-[24px]'>
        <input
          className='form-control'
          placeholder='Full Name'
          type='text'
          name='name'
          required
        />
        <input
          className='form-control'
          placeholder='Phone Number'
          type='text'
          name='phone'
          required
        />
        <input
          className='form-control'
          placeholder='Email address'
          type='email'
          name='email'
          required
        />
        <textarea
          className='resize-none w-full h-[132px] outline-none rounded-sm p-4 font-body text-sm text-gray focus:ring-1 focus:ring-primary form-control'
          placeholder='Message'
          rows='5'
          name='message'
          required
        ></textarea>

        <button
          type='submit'
          className='btn bg-primary hover:bg-primary-hover transition-all w-full'
        >
          Send message
        </button>
      </form>
    </div>
  )
}

export default Appointment
