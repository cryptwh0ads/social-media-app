import "./styles.css"

export default function OnlineUsersComponent({ user }) {
    return (
        <li className={"right-friend"}>
            <div className={"right-profile-img-container"}>
                <img className={"right-profile-img"} src={user.profilePic} alt={"Profile image"}/>
                <span className={"right-status"}></span>
            </div>
            <span className={"right-username"}>{user.profileName}</span>
        </li>
    )
}