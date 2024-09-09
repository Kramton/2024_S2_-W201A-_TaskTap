// import { Link } from "react-router-dom"
import "./Home.css"

export function Home() {
    return (
        <div className="homePage">
            <h1>Welcome to TaskTap!</h1>

            <div className="searchBarContainer">
                <input type="text" className="searchBar" placeholder="Search..."/>
            </div>
        </div>
    )
}