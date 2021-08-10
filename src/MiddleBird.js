function MiddleBird(props){
    let today = new Date().toISOString().split('T')[0];
    function processImage(event) {
        props.saveFields("MiddleBird", "Image", URL.createObjectURL(event.target.files[0]));
    }
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
                       onChange={(e)=>props.saveFields("MiddleBird", "Cuteness",e.target.value)}
                       value={props.values?.MiddleBird?.Cuteness ? props.values?.MiddleBird?.Cuteness : 50} />
                <label for="cuteness">Adorable</label>
                <br />
                <br />
                <span className="Label" id="Image-label">Upload a picture of your birb: </span>
                <input type="file" className="Image" onChange={(e) => processImage(e)} accept="image/*" />
                <img className="Image-preview" src={props.values?.MiddleBird?.Image ? props.values.MiddleBird.Image : null} />
                <br />
                <br />
                <span className="Label" id="Date-label">Date you want bird to find new home by: </span> 
                <input type="date" className="Date" min={today}
                       onChange={(e)=>props.saveFields("MiddleBird", "Date", e.target.value)}
                       value={props.values?.MiddleBird?.Date ? props.values.MiddleBird.Date : null} />
                <span className="Label" id="Birbtype-label">What type of friend is this bird primarily?</span>
                <br />
                <input type="radio" id="huggable" name="friendtype" value="huggable" 
                       onChange={(e)=>props.saveFields("MiddleBird", "Friendtype", e.target.value)}
                       defaultChecked={props.values?.MiddleBird?.Friendtype ? props.values.MiddleBird.Friendtype==="huggable" : false } />
                <label for="huggable">Huggable</label>
                <input type="radio" id="floofy" name="friendtype" value="floofy" 
                       onChange={(e)=>props.saveFields("MiddleBird", "Friendtype", e.target.value)}
                       defaultChecked={props.values?.MiddleBird?.Friendtype ? props.values.MiddleBird.Friendtype==="floofy" : false } />
                <label for="floofy">Floofy</label>
                <input type="radio" id="chonk" name="friendtype" value="chonk" 
                       onChange={(e)=>props.saveFields("MiddleBird", "Friendtype", e.target.value)}
                       defaultChecked={props.values?.MiddleBird?.Friendtype ? props.values.MiddleBird.Friendtype==="chonk" : false } />
                <label for="floofy">Chonk</label>
            </form>
        </div>
    )
}

export default MiddleBird;