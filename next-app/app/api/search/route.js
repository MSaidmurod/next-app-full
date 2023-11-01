import { NextResponse } from "next/server";
import courses from '../data.json'

export function GET(request) {
    const {searchParams} = new URL(request.url)
    const query = searchParams.get('query')
    console.log(query);



    const filterCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase())
    })

    return NextResponse.json(filterCourses)
}