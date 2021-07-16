import "./styles.css"
import {MoreVert} from "@material-ui/icons";

import { Users } from '../../../Data/User'
import {useState} from "react";

export default function PostComponent({ post }) {

    const [like, setLike] = useState(post.likes)
    const [isLiked, setIsLiked] = useState(false)

    const likeHandle = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

  return (
    <div className={"post"}>
        <div className={"post-wrapper"}>
            <div className={"post-top"}>
                <div className={"post-top-left"}>
                    <img className={"post-profile-img"} src={Users.filter(u => u.id === post.userId)[0].profilePic} alt={"Post Profile"} />
                    <span className={"post-username"}>{Users.filter(u => u.id === post.userId)[0].profileName}</span>
                    <span className={"post-date"}>{post.date}</span>
                </div>
                <div className={"post-top-right"}>
                    <MoreVert />
                </div>
            </div>
            <div className={"post-center"}>
                <span className={"post-text"}>{post?.description}</span>
                {post?.photo ? <img className={"post-img"} src={post.photo} alt={"Post image"}/> : null }
            </div>
            <div className={"post-bottom"}>
                <div className={"post-bottom-left"}>
                    <img className={"like-icon"} src={"assets/like.png"} alt={"like"} onClick={likeHandle}/>
                    <img className={"like-icon"} src={"assets/heart.png"} alt={"like"} onClick={likeHandle}/>
                    <span className={"post-like-counter"}>{like} people like it</span>
                </div>
                <div className={"post-bottom-right"}>
                    <span className={"post-comment-text"}>{post.comments} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
