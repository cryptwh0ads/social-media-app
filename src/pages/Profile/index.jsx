import "./styles.css"
import Navbar from "../../components/Navbar";
import LeftSideBar from "../../components/Sidebars/Left";
import Feed from "../../components/Feed";
import RightSideBar from "../../components/Sidebars/Right";

export default function Profile() {
    return (
        <div>
            <Navbar />
            <div className={"profile-container"}>
                <LeftSideBar />
                <div className={"profile-right"}>
                    <div className={"profile-right-top"}>
                        <div className={"profile-cover"}>
                            <img className={"profile-cover-img"} src={"assets/post/3.jpeg"} alt={"Cover Image"}/>
                            <img className={"profile-user-img"} src={"assets/person/3.jpeg"} alt={"Profile Image"}/>
                        </div>
                        <div className={"profile-info"}>
                            <h4 className={"profile-info-name"}>Vinny Cruz</h4>
                            <span className={"profile-info-description"}>Hello My Friend</span>
                        </div>
                    </div>
                    <div className={"profile-right-bottom"}>
                        <Feed />
                        <RightSideBar profile/>
                    </div>
                </div>
            </div>
        </div>
    )
}