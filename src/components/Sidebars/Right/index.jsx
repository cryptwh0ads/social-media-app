import "./styles.css"

import { Users } from "../../../Data/User";
import OnlineUsersComponent from "./OnlineUsers";

export default function RightSideBar({ profile }) {

    const HomeRightBar = () => {
        return (
            <>
            <div className={"birthday-container"}>
                <img className={"birthday-img"} src={"assets/gift.png"} alt={"Gift image"} />
                <span className={"birthday-text"}>
                        <b>Duda Souza</b> and <b>9 other friends</b> have a birthday today
                    </span>
            </div>
        <h4 className={"right-title"}>Online Friends</h4>
        <ul className={"right-friend-list"}>
            {Users.map(user => (
                <OnlineUsersComponent key={user.id} user={user} />
            ))}
        </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className={"rightbar-title"}>User Information</h4>
                <div className={"rightbar-info"}>
                    <div className={"rightbar-info-item"}>
                        <span className={"rightbar-info-key"}>City: </span>
                        <span className={"rightbar-info-value"}>Sao Paulo </span>
                    </div>
                    <div className={"rightbar-info-item"}>
                        <span className={"rightbar-info-key"}>From: </span>
                        <span className={"rightbar-info-value"}>Brazil </span>
                    </div>
                    <div className={"rightbar-info-item"}>
                        <span className={"rightbar-info-key"}>Relationship: </span>
                        <span className={"rightbar-info-value"}>Dating </span>
                    </div>
                </div>
                <h4 className={"rightbar-title"}>User Friends</h4>
                <div className={"rightbar-followings"}>
                    <div className={"rightbar-following"}>
                        <img src={"assets/person/1.jpeg"} alt={"User Follow"} className={"rightbar-following-img"} />
                        <span className={"rightbar-following-name"}>Duda Souza</span>
                    </div>
                    <div className={"rightbar-following"}>
                        <img src={"assets/person/1.jpeg"} alt={"User Follow"} className={"rightbar-following-img"} />
                        <span className={"rightbar-following-name"}>Duda Souza</span>
                    </div>
                    <div className={"rightbar-following"}>
                        <img src={"assets/person/1.jpeg"} alt={"User Follow"} className={"rightbar-following-img"} />
                        <span className={"rightbar-following-name"}>Duda Souza</span>
                    </div>
                    <div className={"rightbar-following"}>
                        <img src={"assets/person/1.jpeg"} alt={"User Follow"} className={"rightbar-following-img"} />
                        <span className={"rightbar-following-name"}>Duda Souza</span>
                    </div>
                    <div className={"rightbar-following"}>
                        <img src={"assets/person/1.jpeg"} alt={"User Follow"} className={"rightbar-following-img"} />
                        <span className={"rightbar-following-name"}>Duda Souza</span>
                    </div>
                    <div className={"rightbar-following"}>
                        <img src={"assets/person/1.jpeg"} alt={"User Follow"} className={"rightbar-following-img"} />
                        <span className={"rightbar-following-name"}>Duda Souza</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
        <div className={"right-sidebar"}>
            <div className={"right-wrapper"}>
                <ProfileRightBar />
            </div>
        </div>
        </>
    )
}