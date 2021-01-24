import Link from 'next/link'

const PostObject = (props) => {
    return(
        <div>

        <p>Post :{props.text}</p>
        <img src={props.image}></img>
        <p>Like : {props.likes}</p>

        <Link href={'./'}>
            <button>Go back ;-;</button>
        </Link>

    </div>
    )
}
export default PostObject