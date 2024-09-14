import { Navbar } from "../Components/NavBar";
import { Outlet } from "react-router-dom";

export function PageLayout(props) {
    return (
        <div>
            <Navbar userLoggedIn={props.userLoggedIn} setUserLoggedIn={props.setUserLoggedIn}/>
            <main>
                {/* Renders the child routes of whatever routes this is in */}
                <Outlet/>
            </main>
        </div>
    )
}