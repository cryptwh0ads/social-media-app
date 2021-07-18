import axios from 'axios'

import "./styles.css"

import ShareComponent from "./Share";
import PostComponent from "./Post";

import {useEffect, useState} from "react";

export default function Feed({ username }) {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const res = username ? await axios.get("/posts/profile/" + username)
            : await axios.get('posts/timeline/60f44ed445b0f0a47f2e88dc')
        setPosts(res.data.data)
    }


    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <div className={"feed"}>
            <div className={"feed-wrapper"}>
                <ShareComponent />
                {posts.map(post => (
                    <PostComponent key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}