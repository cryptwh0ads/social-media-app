import "./styles.css"
import {
    Bookmark, Chat,
    Event,
    Group,
    HelpOutline,
    PlayCircleFilledOutlined,
    RssFeed,
    School,
    WorkOutline
} from "@material-ui/icons";

export default function LeftSideBar() {
    return (
        <div className={"left-sidebar"}>
            <div className={"left-wrapper"}>
                <ul className={"left-list"}>
                    <li className={"left-list-item"}>
                        <RssFeed className={"left-icon"} />
                        <span className={"left-list-item-desc"}>Feed</span>
                    </li>
                    <li className={"left-list-item"}>
                        <Chat className={"left-icon"} />
                        <span className={"left-list-item-desc"}>Chat</span>
                    </li>
                    <li className={"left-list-item"}>
                        <PlayCircleFilledOutlined className={"left-icon"} />
                        <span className={"left-list-item-desc"}>Videos</span>
                    </li>
                    <li className={"left-list-item"}>
                        <Group className={"left-icon"} />
                        <span className={"left-list-item-desc"}>Groups</span>
                    </li>
                    <li className={"left-list-item"}>
                        <Bookmark className={"left-icon"} />
                        <span className={"left-list-item-desc"}>Bookmarks</span>
                    </li>
                    <li className={"left-list-item"}>
                        <HelpOutline className={"left-icon"} />
                        <span className={"left-list-item-desc"}>Questions</span>
                    </li>
                    <li className={"left-list-item"}>
                        <WorkOutline className={"left-icon"} />
                        <span className={"left-list-item-desc"}>Jobs</span>
                    </li>
                    <li className={"left-list-item"}>
                        <Event className={"left-icon"} />
                        <span className={"left-list-item-desc"}>Events</span>
                    </li>
                    <li className={"left-list-item"}>
                        <School className={"left-icon"} />
                        <span className={"left-list-item-desc"}>Courses</span>
                    </li>
                </ul>
                <button className={"left-button"}>Show More</button>
                <hr className={"left-hr"}/>
                <ul className={"left-friend-list"}>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                    <li className={"left-friend"}>
                        <img className={"left-friend-img"} src={"/assets/person/2.jpeg"} alt={''}/>
                        <span className={"left-friend-name"}>Jane Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}