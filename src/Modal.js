import './Modal.css'
function Modal(props) {
    if (props.visible) {
        return (
            <div className="Modal">
                <div className="Modal-content">{props.children}</div>
                <div className="Modal-actions">
                    <button className="Close"
                            onClick={props.close}>Close
                    </button>
                </div>
            </div>
        );
    }
    return null;
}
  
export default Modal;
  