import './Modal.css'
function Modal(props) {
    if (props.visible) {
        return (
            <div className="Modal">
                <div className="Close-container">
                    <a href="#" className="Close" onClick={props.close} />
                </div>
                <div className="Modal-content">{props.children}</div>
                <div className="Modal-actions">
                    {props.back ? <button className="Back"
                            onClick={()=>props.back()}>Back
                    </button> : null}
                    {props.next ? <button className="Next"
                            onClick={()=>props.next()}>Next
                    </button> : null}
                    {props.submit ? <button className="Submit"
                            onClick={()=>props.submit()}>Submit
                    </button> : null}
                </div>
            </div>
        );
    }
    return null;
}
  
export default Modal;
  