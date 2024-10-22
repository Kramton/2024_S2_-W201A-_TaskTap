import "./Background.css";
import bg from "../Assets/bg.mp4";

export function Background() {
    return (
        <div className="background">
            <video src={bg} autoPlay loop muted></video>
        </div>
    )
}