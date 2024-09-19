// import { Link } from "react-router-dom"
import "./Home.css";
import bg from "../Assets/bg04.mp4";

export function Home() {
    return (
        <div className="homePage">
            <div className="background">
                <video src={ bg } autoPlay loop muted></video>
            </div>
            
            <div className="welcome">
                <h1>Welcome to TaskTap!</h1>

                <input type="text" className="searchBar" placeholder="Search..."/>
            </div>
        </div>
    )
}