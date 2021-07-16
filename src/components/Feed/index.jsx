import "./styles.css"
import ShareComponent from "./Share";
import PostComponent from "./Post";

import { Posts } from '../../Data/Post'

export default function Feed() {
    return (
        <div className={"feed"}>
            <div className={"feed-wrapper"}>
                <ShareComponent />
                {Posts.map(post => (
                    <PostComponent key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}