import React from 'react'
import Image from 'next/image'
import imageLoader from '../utils/imageHandler'
import JobTitles from '../components/jobTitles'

const GradientBanner = ({ info: { jobTitles, profilePic } }) => {
  return (
    <div className='min-w-screen relative h-96 p-8 pt-16 text-center bg-gradient-to-tr from-amber-500 to-pink-600 mb-32'>
      <h1 className='text-3xl font-semibold p-3 text-white'>DavidJGrant Portfolio</h1>
      <JobTitles jobTitles={jobTitles} />
      <div className="bg-gray-50 dark:bg-black p-4 rounded-full absolute -bottom-20 left-1/2 transform -translate-x-1/2">
        <Image
          className='rounded-full'
          loader={imageLoader}
          src={profilePic.url}
          alt="Profile Pic"
          width={248}
          height={248}
        />
      </div>
    </div>
  )
}

export default GradientBanner