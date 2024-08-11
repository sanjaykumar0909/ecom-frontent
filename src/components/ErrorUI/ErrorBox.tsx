import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import "./ErrorBox.scss"
type ErrorBox = {
  msg: string;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  className?: string
};
export default function ErrorBox({msg, onClick}:ErrorBox){
return<>
    <div className="errorbox-overlay" onClick={onClick}>
        <div className="dialog" onClick={ev=>{
            ev.stopPropagation()
        }}>
        <div className="title">
            <FontAwesomeIcon icon={faCircleExclamation} style={{color: "#ff6675"}} />
            <h2>Error</h2>
        </div>
        
        <div className="message">{msg}</div>
        </div>

    </div>
</>
}