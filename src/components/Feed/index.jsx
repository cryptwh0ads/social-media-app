import "./styles.css"
import ShareComponent from "./Share";

export default function Feed() {
    return (
        <div className={"feed"}>
            <div className={"feed-wrapper"}>
                <ShareComponent />
            </div>
        </div>
    )
}