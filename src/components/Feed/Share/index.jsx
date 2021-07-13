import "./styles.css"
import {EmojiEmotions, Label, PermMedia, Room} from "@material-ui/icons";

export default function ShareComponent(){
    return(
        <div className={"share"}>
            <div className={"share-wrapper"}>
                <div className={"share-top"}>
                    <img className={"share-profile-img"} src={"/assets/person/1.jpeg"} alt={''} />
                    <input
                        placeholder={"What's in your mind?"}
                        className={"share-input"}/>
                </div>
                <hr className={'share-hr'} />
                <div className={"share-bottom"}>
                    <div className={"share-options"}>
                        <div className={"share-option"}>
                            <PermMedia className={"share-icon"} />
                            <span className={"share-option-desc"}>Photo / Video</span>
                        </div>
                        <div className={"share-option"}>
                            <Label className={"share-icon"} />
                            <span className={"share-option-desc"}>Tag</span>
                        </div>
                        <div className={"share-option"}>
                            <Room className={"share-icon"} />
                            <span className={"share-option-desc"}>Location</span>
                        </div>
                        <div className={"share-option"}>
                            <EmojiEmotions className={"share-icon"} />
                            <span className={"share-option-desc"}>Feelings</span>
                        </div>
                    </div>
                    <button className={"share-button"}>Share</button>
                </div>
            </div>
        </div>
    )
}