import { SideBar } from "../Components/SideBar";
import { List } from "../Components/List";
import { Detail } from "../Components/Detail";
import "./Chat.css"

{/* https://youtu.be/zQyrwxMPm88?si=GBljFsFiXQTBwlhd */}
{/* https://youtu.be/0gLr-pBIPhI?si=zVNyvbWr17a0-kUA */}
{/* https://youtu.be/domt_Sx-wTY?si=evMis3ifeezXXwcI */}
export function Chat() {

    return (
        <div className="container">
            <SideBar/>
            <div className="chat">
                <h1>Chat</h1>
                            
                <List/>
                <Detail/>
                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim cupiditate maxime, cum at voluptas ducimus placeat accusamus quis distinctio quia sed modi odit voluptatum omnis incidunt praesentium. At, temporibus.</p> */}
            
            </div>
            
        </div>
    )
}