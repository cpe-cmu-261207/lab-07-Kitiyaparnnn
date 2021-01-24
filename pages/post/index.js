import { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
const baseURL = 'https://dummyapi.io/data/api'

const fakeapi = '600c381615a621f84f2ad3cd'

const Posts = () => {
    const [posts, setPosts] = useState([])
    //input data[]
    useEffect(() => {
        // console.log(' ;-; ');
        axios.get(`${baseURL}/post`, { headers: { "app-id": fakeapi } })
            .then((res) => {
                console.log(res);
                setPosts(res.data.data)
            })
    }, [])

    return (
        <>
            <h1>All Posts</h1>
            <div className=''>
                {posts.map((post) => {
                    return (
                        <div key={post.id}>

                            <p>Post :{post.text}</p>
                            <img src={post.image}></img>
                            <p>Like : {post.likes}</p>

                            <Link href={'./post/' + post.id}>
                                <button>Go go ...</button>
                            </Link>

                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Posts
