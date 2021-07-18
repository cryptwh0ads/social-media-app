import "./styles.css"
import {MoreVert} from "@material-ui/icons";

import {useEffect, useState} from "react";
import axios from "axios";
import { format } from 'timeago.js'
import {Link} from "react-router-dom";
export default function PostComponent({ post }) {

    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const likeHandle = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }

    const fetchUser = async () => {
        const res = await axios.get(`/users?userId=${post.userId}`)
        setUser(res.data.data)
    }

    useEffect(() => {
        fetchUser()
    }, [post.userId])

  return (
    <div className={"post"}>
        <div className={"post-wrapper"}>
            <div className={"post-top"}>
                <div className={"post-top-left"}>
                    <Link to={`profile/${user.username}`}><img className={"post-profile-img"} src={user.profilePicture || publicFolder+"person/noAvatar.png" } alt={"Post Profile"} /></Link>
                    <span className={"post-username"}>{user.username}</span>
                    <span className={"post-date"}>{format(post.createdAt)}</span>
                </div>
                <div className={"post-top-right"}>
                    <MoreVert />
                </div>
            </div>
            <div className={"post-center"}>
                <span className={"post-text"}>{post?.description}</span>
                {post?.postPicture ? <img className={"post-img"} src={publicFolder+post.postPicture} alt={"Post image"}/> : null }
            </div>
            <div className={"post-bottom"}>
                <div className={"post-bottom-left"}>
                    <img className={"like-icon"} src={`${publicFolder}like.png`} alt={"like"} onClick={likeHandle}/>
                    <img className={"like-icon"} src={`${publicFolder}heart.png`} alt={"like"} onClick={likeHandle}/>
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
