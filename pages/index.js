import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
      // <h1>eiei</h1>
      <>
      <Link href={`/port`}><h1>Home</h1></Link>
      <Link href={`/post`}><h1>Post</h1></Link>
      <Link href={`/gpa`}><h1>GPA</h1></Link>
      </>
  )
}

export default Home
