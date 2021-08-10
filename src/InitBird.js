import { useEffect } from "react";

function InitBird(props){
    useEffect(() => {
        props.required([document.getElementById("name"), document.getElementById("description"), document.getElementById("sex")]);
    })
    return (
        <div className="InitBirdFrame">
            <span className="Instructions">To start, please fill out some basic information about your bird.</span>
            <br />
            <form className="Init-bird">
                <span className="Label" id="Name-label">Bird name: </span>
                <input type="text" className="Name" id="name"
                       onChange={(e)=>props.saveFields("Name", e.target.value)} value={props.values?.InitBird?.Name ? props.values.InitBird.Name : null} />
                <br />
                <span className="Label" id="Name-label">Bird description: </span>
                <br />
                <textarea className="Description" id="description"
                          onChange={(e)=>props.saveFields("Description", e.target.value)} value={props.values?.InitBird?.Description ? props.values.InitBird.Description : null}></textarea>
                <br />
                <select id="sex"
                        className="Sex"
                        value={props.values?.Sex ? props.values.Sex : ""} 
                        onChange={(e)=>props.saveFields("Sex", e.target.value)}>
                    <option disabled selected value=""> -- select your bird's sex -- </option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Who knows">Who even knows with birds</option>
                </select>
            </form>
        </div>
    )
}

export default InitBird;