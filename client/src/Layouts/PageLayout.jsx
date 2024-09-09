import { Navbar } from "../Components/NavBar";
import { Outlet } from "react-router-dom";

export function PageLayout() {
    return (
        <div>
            <Navbar/>
            <main>
                {/* Renders the child routes of whatever routes this is in */}
                <Outlet/>
            </main>
        </div>
    )
}