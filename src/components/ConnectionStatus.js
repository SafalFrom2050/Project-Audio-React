import "./ConnectionStatus.css";

function ConnectionStatus(props){
    return(
        <div className="status-container">
            <h4>{props.isConnected? "Connected to:" : "Not Connected"}</h4>
            {props.isConnected? <h4>props.connectedDevice</h4> : ""}
        </div>
    )
}

export default ConnectionStatus;