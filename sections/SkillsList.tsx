import React from 'react'

const SkillsList = ({skillsList}) => {

  const n = 3
  const result = [[], [], []]

  const wordsPerLine = Math.ceil(skillsList.length / 3)

  for (let line = 0; line < n; line++) {
    for (let i = 0; i < wordsPerLine; i++) {
      const value = skillsList[i + line * wordsPerLine]
      if (!value) continue
      result[line].push(value)
    }
  }

  return (
    <div className='w-[96vw] mx-auto my-24 md:mt-64 md:mb-32 flex flex-col items-start text-4xl md:text-6xl font-bold text-gray-200 dark:text-zinc-900 opacity-15 select-none overflow-hidden'>
      {result.map(list => {
        return (
          <ul className='flex justify-between gap-x-16 infinite-scroll mb-16'
          key={list[0]}>{list.map(skill => {
            return ( 
              <li key={skill}>{skill}</li>
            )
          })}</ul>
        )
      })}
    </div>

  )
}

export default SkillsList