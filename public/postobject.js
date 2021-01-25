import Link from 'next/link'

const PostObject = (props) => {
    return(
        <div>

        <h2 className="post-text1">{props.text}</h2>
        <p className="post-text2">Tags : {props.tags} </p>
        <img className="image-post" src={props.image}></img>
        <br />
        <p className="post-text2 textbold">Post by : {props.owner.firstName} {props.owner.lastName}</p>
        <p className="post-text2">Like : {props.likes}</p>

        <Link href={'./'}>
            <button className="button-post button-postid">Go back</button>
        </Link>

    </div>
    )
}
export default PostObject