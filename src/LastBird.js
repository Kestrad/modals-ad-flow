function LastBird(props){
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
                {props.showAd(props.values)}
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