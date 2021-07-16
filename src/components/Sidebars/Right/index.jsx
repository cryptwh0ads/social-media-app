import "./styles.css"

import { Users } from "../../../Data/User";
import OnlineUsersComponent from "./OnlineUsers";

export default function RightSideBar() {
    return (
        <div className={"right-sidebar"}>
            <div className={"right-wrapper"}>
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
            </div>
        </div>
    )
}