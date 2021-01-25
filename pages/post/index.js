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
                // console.log(res);
                setPosts(res.data.data)
            })
    }, [])

    return (
        <>
            <div className="background-post">
                <h1 className="title">All Posts</h1>
                <Link href={'./'}>
                    <button className="button-post">Go back</button>
                </Link>
                <div className='manu background-post'>
                    {posts.map((post) => {
                        return (
                            <div key={post.id} className="card">

                                <h3 className="description">{post.text}</h3>
                                <img src={post.image}></img>
                                <br />
                                <p>Like : {post.likes}</p>
                                <br />
                                <Link href={'./post/' + post.id}>
                                    <button className="button-post">Go to this post</button>
                                </Link>

                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Posts
