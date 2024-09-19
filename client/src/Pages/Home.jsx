// import { Link } from "react-router-dom"
import "./Home.css";
import bg from "../Assets/bg.mp4";

export function Home() {
    return (
        <div className="homePage">
            <div className="background">
                <video src={ bg } autoPlay loop muted></video>
            </div>
            
            <div className="welcome">
                <h1>Welcome to TaskTap!</h1>

                {/* <input type="text" className="searchBar" placeholder="Search..."/> */}
                
                <div id="cover">
                    <form method="get" action="">
                        <div class="tb">
                            <div class="td"><input type="text" placeholder="Search" /></div>
                            <div class="td" id="s-cover">
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
    )
}