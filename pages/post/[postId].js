import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import axios from 'axios'
import PostObject from "../../public/postobject";

const baseURL = 'https://dummyapi.io/data/api'
const fakeapi = '600c381615a621f84f2ad3cd' //ของให้ของมัน

const Post = () => {
    const router = useRouter()
    const { postId } = router.query
    const [post, setPost] = useState(null)
    const [comment, setComment] = useState([])

    //input data[]
    useEffect(() => {
        // console.log(' ;-; ');
        if (!postId)
            return;
        Get()
        // console.log('work ?')       
    }, [postId])

    const Get = async () => {
        const getpost = await axios.get(`${baseURL}/post/${postId}`, { headers: { "app-id": fakeapi } })
        const getcomment = await axios.get(`${baseURL}/post/${postId}/comment`, { headers: { "app-id": fakeapi } })
        console.log(getpost);
        // console.log(getcomment);
        setPost(getpost.data)
        setComment(getcomment.data.data)
    }

    if (post) {
        return (
            <>
            <div style={{backgroundColor: "#e3e650"}}>
                <div className="post">
                    <br />
                    <PostObject {...post} />
                </div>
                <div className="post-comment">
                    <p className="post-text2 textbold">Comments</p>
                    {comment.map((comments) => {
                        // console.log(comments)
                        return (
                            <div className="post-text2" key={comments.id}>
                                <p>{comments.owner.firstName} {comments.owner.lastName} : {comments.message}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
                {/* <h1>display post data from api here</h1> */}
                
            </>
        )
    }
    else {
        return(
            <>
            </>
        )
    }


}

export default Post

