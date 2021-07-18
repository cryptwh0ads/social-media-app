import "./styles.css"
import {Chat, Notifications, Person, Search} from "@material-ui/icons";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div className={"container"}>
            <div className={"left"}>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <span className={"logo"}>SocialMedia</span>
                </Link>
            </div>
            <div className={"center"}>
                <div className={"search-bar"}>
                    <Search className={"search-icon"} />
                    <input placeholder={"What do you like to search..."} className={"search-input"} />
                </div>
            </div>
            <div className={"right"}>
                <div className={"links"}>
                    <Link to={"/"} style={{textDecoration: "none"}}>
                        <span className={"item-link"}>Home</span>
                    </Link>
                    <span className={"item-link"}>Timeline</span>
                </div>
                <div className={"icons"}>
                    <div className={"item-icon"}>
                        <Person />
                        <span className={"icon-badge"}>1</span>
                    </div>
                    <div className={"item-icon"}>
                        <Chat />
                        <span className={"icon-badge"}>2</span>
                    </div>
                    <div className={"item-icon"}>
                        <Notifications />
                        <span className={"icon-badge"}>3</span>
                    </div>
                </div>
                <img src={"/assets/person/1.jpeg"} alt={"Profile Picture"} className={'profile-img'} />
            </div>
        </div>
    )
}