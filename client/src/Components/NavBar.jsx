import { Link } from "react-router-dom";
import "./NavBar.css"
import homerchu from "../Assets/homerchu.png"

export function Navbar() {
    return (
        <div className="navBarWrap">
            <a href="./">
                <img src={homerchu} alt="fused homer pikachu" />
            </a>
            <Link to="/SignInSignUp">
                <button>SignUp</button>
            </Link>
            <Link to="/Account">
                <button>Account</button>
            </Link>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    )
}