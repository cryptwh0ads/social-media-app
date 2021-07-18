import "./styles.css"

export default function OfflineUsersComponent({ user }) {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <li className={"left-friend"}>
            <img className={"left-friend-img"} src={publicFolder+user.profilePic} alt={''}/>
            <span className={"left-friend-name"}>{user.profileName}</span>
        </li>
    )
}