'use client'

import CourseSearch from '@/components/CourseSearch'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Loading from './loading'
import Course from '@/components/Course'

function HomePage() {
  const [cursers, setCursers] = useState(null)
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    const getData = async() => {
      const req = await fetch("api/courses")
      const data = await req.json()
      setCursers(data)
      setIsPending(false)
    }
    getData()
  }, [])

  if (isPending ) {
    return <Loading/>
  }
  return (
    <div>
      <h2>Welcome to the Course</h2>
      <CourseSearch getSearchCorses={(Search) => setCursers(Search)}/>
      <Course cursers={cursers}/>
      
    </div>
  )
}

export default HomePage