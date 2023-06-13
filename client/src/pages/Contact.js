import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className='row contactus'>
        <div className='col-md-6'>
          <img src='/contactus.jpeg' alt='contactus' style={{ width: '100%' }} />
        </div>
        <div className='col-md-4'>
          <p className='text-justify mt-2'>
          Any query and info about product - Feel free to call anytime. We 24x7 available.
          </p>
          <p className='mt-3'>
              <BiMailSend /> : www.divyamraj.com
            </p>
            <p className='mt-3'>
              <BiPhoneCall /> : 1234567890
            </p>
            <p className='mt-3'>
              <BiSupport /> : 0987654321 (toll free)
            </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact