import { SideBar } from "../Components/SideBar";
import "./Chat.css";
import avatar from "../Assets/avatar.png";
import { Seperator } from "../Components/Seperator";

{/* https://youtu.be/zQyrwxMPm88?si=GBljFsFiXQTBwlhd */}
{/* https://youtu.be/0gLr-pBIPhI?si=zVNyvbWr17a0-kUA */}
{/* https://youtu.be/domt_Sx-wTY?si=evMis3ifeezXXwcI time stamp: 31:07*/}
export function Chat() {

    return (
        <div className="chatContainer">
            <SideBar/>
            <div className="chat">
                <div className="top">
                    <div className="user">
                        <img src={avatar} alt="user icon" />
                        <div className="name">
                            <span>John Doe</span>
                        </div>
                    </div>
                </div>

                <div className="middle">

                </div>
                
                {/* <Seperator/> */}

                <div className="bottom">
                    <input type="text" className="textMessage" placeholder="Type a message..."/>
                    <div className="buttonContainer">
                        <button className="sendButton">Send</button>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}