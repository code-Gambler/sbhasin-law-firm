import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-accent pt-[54px] pb-[74px]'>
        <div className='container mx-auto px-8 text-center'>
            <h3 className='font-primary text-[40px] font-extrabold leading-[1,2] text-white mb-[12px]'>
                Subscribe to our newsletter
                </h3>
                <p className='mb-[40px] text-white text-sm'>
                    Be first to get the latest news about us.
                </p>
                <form className='max-w-[600px] mx-auto flex flex-col lg:flex-row'>
                    <input className='form-control mb-4' placeholder='Your email address' type='email'/>
                    <button className='btn bg-primary hover:bg-primary-hover lg:max-w-[150px] lg:ml-14'>Join</button>
                </form>
        </div>
    </section>
  )
}

export default Newsletter