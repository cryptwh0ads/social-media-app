import "./styles.css"

export default function OnlineUsersComponent({ user }) {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className={"right-friend"}>
            <div className={"right-profile-img-container"}>
                <img className={"right-profile-img"} src={publicFolder+user.profilePic} alt={"Profile image"}/>
                <span className={"right-status"}></span>
            </div>
            <span className={"right-username"}>{user.profileName}</span>
        </li>
    )
}