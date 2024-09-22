// import { Link } from "react-router-dom"
import "./Home.css";
import bg from "../Assets/bg.mp4";

export function Home() {
    return (
        <div className="homePage">
            <div className="background">
                <video src={bg} autoPlay loop muted></video>
            </div>
            
            <div className="welcome">
                <h1>Welcome to TaskTap!</h1>

                {/* TaskTap Description */}
                <p className="description">
                    TaskTap is your go-to platform for on-demand services. Whether you need a quick haircut, plumbing help, or electrical fixes, TaskTap connects you with local professionals instantly.
                </p>
                
                {/* Search bar */}
                <div id="searchBar">
                    <form method="get" action="">
                        <div className="tb">
                            <div className="td">
                                <input type="text" placeholder="Search" />
                            </div>
                            <div className="td" id="s-cover">
                                <button type="submit">
                                    <div id="s-circle"></div>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
