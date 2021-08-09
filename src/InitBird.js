function InitBird(){
    return (
        <form className="Init-bird">
            <span className="Name-label">Bird name: </span>
            <input type="text" className="Name"></input>
            <br />
            <br />
            <span className="Description-label">Bird description: </span>
            <br />
            <textarea className="Description"></textarea>
        </form>
    )
}

export default InitBird;