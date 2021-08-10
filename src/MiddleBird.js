import { useEffect } from "react";

function MiddleBird(props){
    let today = new Date().toISOString().split('T')[0];
    function processImage(event) {
        props.saveFields("Image", URL.createObjectURL(event.target.files[0]));
    }
    useEffect(() => {
        props.required([document.getElementById("date")]);
    })
    return (
        <div className="MiddleBirdFrame">
            <span className="Instructions">Please provide some further details for this listing: </span>
            <br />
            <form className="Middle-bird">
                <span className="Label" id="Cuteness-label">Bird cuteness: </span>
                <br />
                <label for="cuteness">Cute</label>
                <input type="range" 
                       className="Cuteness" 
                       id="cuteness"
                       name="cuteness"
                       min="0" 
                       max="100" 
                       onChange={(e)=>props.saveFields("Cuteness",e.target.value)}
                       value={props.values?.Cuteness ? props.values?.Cuteness : 50} />
                <label for="cuteness">Adorable</label>
                <br />
                <br />
                <span className="Label" id="Image-label">Upload a picture of your birb: </span>
                <input type="file" className="Image" onChange={(e) => processImage(e)} accept="image/*" />
                <img className="Image-preview" src={props.values?.Image ? props.values.Image : null} />
                <br />
                <br />
                <span className="Label" id="Date-label">Date you want bird to find new home by: </span> 
                <input type="date" className="Date" id="date" min={today}
                       onChange={(e)=>props.saveFields("Date", e.target.value)}
                       value={props.values?.Date ? props.values.Date : null} />
                <span className="Label" id="Birbtype-label">What type of friend is this bird primarily?</span>
                <br />
                <input type="radio" id="huggable" name="friendtype" value="huggable" 
                       onChange={(e)=>props.saveFields("Friendtype", e.target.value)}
                       defaultChecked={props.values?.Friendtype ? props.values.Friendtype==="huggable" : false } />
                <label for="huggable">Huggable</label>
                <input type="radio" id="floofy" name="friendtype" value="floofy" 
                       onChange={(e)=>props.saveFields("Friendtype", e.target.value)}
                       defaultChecked={props.values?.Friendtype ? props.values.Friendtype==="floofy" : false } />
                <label for="floofy">Floofy</label>
                <input type="radio" id="chonk" name="friendtype" value="chonk" 
                       onChange={(e)=>props.saveFields("Friendtype", e.target.value)}
                       defaultChecked={props.values?.Friendtype ? props.values.Friendtype==="chonk" : false } />
                <label for="floofy">Chonk</label>
            </form>
        </div>
    )
}

export default MiddleBird;