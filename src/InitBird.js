function InitBird(props){
    return (
        <div className="InitBirdFrame">
            <span className="Instructions">To start, please fill out some basic information about your bird.</span>
            <br />
            <form className="Init-bird">
                <span className="Label" id="Name-label">Bird name: </span>
                <input type="text" className="Name" onChange={(e)=>props.saveFields("InitBird","Name",e.target.value)} value={props.values?.InitBird?.Name ? props.values.InitBird.Name : null} />
                <br />
                <span className="Label" id="Name-label">Bird description: </span>
                <br />
                <textarea className="Description" onChange={(e)=>props.saveFields("InitBird", "Description",e.target.value)}>{props.values?.InitBird?.Description ? props.values.InitBird.Description : null}</textarea>
            </form>
        </div>
    )
}

export default InitBird;