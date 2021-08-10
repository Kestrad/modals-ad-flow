function LastBird(props){
    function showAd(fields) {
        return (
            <div className="Ad">
                <h1>{fields.InitBird.Name}</h1>
                <div className="info">
                    <div className="PreviewImage">
                        <img src={fields.MiddleBird.Image} />
                    </div>
                    Sex: {fields.InitBird.Sex}
                    <br />
                    How much more adorable than cute: {fields.MiddleBird.Cuteness}%
                    <br />
                    Type of friend: {fields.MiddleBird.Friendtype}
                    <br />
                    Needs to leave before {fields.MiddleBird.Date}
                </div>
            </div>
        )
    }

    function onChange(e) {
        console.log(e);
        props.saveFields("LastBird", "Acknowledge", e.target.checked);
        props.setAllowSubmit(e.target.checked);
    }

    return (
        <div className="LastBirdFrame">
            <span className="Instructions">Confirm that this is the ad you want. </span>
            <br />
            <form className="Last-bird">
                {showAd(props.values)}
                <br />
                <input type="checkbox" id="acknowledge" value="acknowledge" 
                       checked={!!props.values?.LastBird?.Acknowledge}
                       onChange={(e) => onChange(e)} />
                <label for="acknowledge">Yes, this is the ad I want.</label>
            </form>
        </div>
    )
}

export default LastBird;