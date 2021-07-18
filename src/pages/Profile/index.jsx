import "./styles.css"
import Navbar from "../../components/Navbar";
import LeftSideBar from "../../components/Sidebars/Left";
import Feed from "../../components/Feed";
import RightSideBar from "../../components/Sidebars/Right";
import axios from "axios";
import {useEffect, useState} from "react";
import { useParams } from 'react-router'

export default function Profile() {
    const [user, setUser] = useState({})
    const username = useParams().username

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    const fetchUser = async () => {
        const res = await axios.get(`/users?username=${username}`)
        setUser(res.data.data)
    }

    useEffect(() => {
        fetchUser()
    }, [])
    return (
        <div>
            <Navbar />
            <div className={"profile-container"}>
                <LeftSideBar />
                <div className={"profile-right"}>
                    <div className={"profile-right-top"}>
                        <div className={"profile-cover"}>
                            <img className={"profile-cover-img"} src={user.coverPicture || publicFolder+"person/noCover.png"} alt={"Cover Image"}/>
                            <img className={"profile-user-img"} src={user.profilePicture || publicFolder+"person/noAvatar.png"} alt={"Profile Image"}/>
                        </div>
                        <div className={"profile-info"}>
                            <h4 className={"profile-info-name"}>{user.username}</h4>
                            <span className={"profile-info-description"}>{user.description}</span>
                        </div>
                    </div>
                    <div className={"profile-right-bottom"}>
                        <Feed username={username} />
                        <RightSideBar profile={user}/>
                    </div>
                </div>
            </div>
        </div>
    )
}