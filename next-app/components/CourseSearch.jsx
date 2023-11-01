'use client'

import { useState } from "react";



function CourseSearch({getSearchCorses}) {
  const [search, setSearch] = useState('')
  const hendelSubmit = (e) => {
    e.preventDefault()
    const getData = async() => {
      const req = await fetch(`/api/search?query=${search}`)
      const data =await req.json()
      getSearchCorses(data)
    }
    getData()
  }
    return (
      <form onSubmit={hendelSubmit} className="search-form">
        <input type="text" onChange={(e) => {
          setSearch(e.target.value)
        }} className="search-input" />
        <button className="search-button">Search</button>
      </form>
    );
  }
  export default CourseSearch;