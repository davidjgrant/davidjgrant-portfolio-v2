import React from 'react'

const JobTitles = ({jobTitles}) => {
  return (
    <ul>
      { jobTitles && jobTitles.map((title) => {
        return (
          <li
            className='text-white'
            key={title}
          >{title}</li>
        )
      })}
    </ul>
  )
}

export default JobTitles