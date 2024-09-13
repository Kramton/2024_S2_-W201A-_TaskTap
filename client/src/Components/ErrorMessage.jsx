import "./ErrorMessage.css"

export function ErrorMessage(props){

    return (
        <div className="ErrorMessage">
            {props.text}
        </div>
    );

}