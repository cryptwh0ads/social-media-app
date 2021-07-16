import "./styles.css"

export default function OfflineUsersComponent({ user }) {
    return (
        <li className={"left-friend"}>
            <img className={"left-friend-img"} src={user.profilePic} alt={''}/>
            <span className={"left-friend-name"}>{user.profileName}</span>
        </li>
    )
}