import Navbar from '../../components/Navbar'
import LeftSideBar from "../../components/Sidebars/Left";
import Feed from "../../components/Feed";
import RightSideBar from "../../components/Sidebars/Right";

import "./styles.css"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className={"home-container"}>
                <LeftSideBar />
                <Feed />
                <RightSideBar />
            </div>
        </div>
    )
}