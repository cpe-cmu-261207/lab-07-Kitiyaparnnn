import { useEffect } from 'react';
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
    // <h1>eiei</h1>
    <>
      <div className="page-manu">
        <div>
          <Link href={`/port`}><button className="button button1">PROFILE</button></Link>
        </div>
        <div>
          <Link href={`/post`}><button className="button button2">API POST</button></Link>
        </div>
        <div>
          <Link href={`/gpa`}><button className="button button3">GPA</button></Link>
        </div>
        
      </div>
    </>
  )
}

export default Home
