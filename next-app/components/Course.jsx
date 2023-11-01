import Link from 'next/link';
import React from 'react'

function Course({cursers}) {
  return (
    <ul>
        {cursers && cursers.map((course) => {
         return   <li key={course.id} className='card '>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link href={course.link}>Go to Course</Link>
         </li>
        })}
    </ul>
  )
}

export default Course