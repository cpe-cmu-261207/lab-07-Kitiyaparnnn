import Link from 'next/link'

const PostObject = (props) => {
    return(
        <div>

        <p>Post :{props.text}</p>
        <p>Tags :{props.tags} </p>
        <img src={props.image}></img>
        <p>Post by :{props.owner.firstName} {props.owner.lastName}</p>
        <p>Like : {props.likes}</p>

        <Link href={'./'}>
            <button>Go back ;-;</button>
        </Link>

    </div>
    )
}
export default PostObject