function Player(props) {

    const hobbyList = props.hobbies.map(hobby => {
        return <li>{hobby}</li>
    })

    const hobbies = props.hobbies.length < 1 ? "No hobbies listed"
    : hobbyList

    /* ===OR===
    const playerHobbies = props.hobbies.length ?props.hobbies.map(hobby => {
        return <li key={props.id}>{hobby}</li>
    })
    : <p>None listed</p>

    */

    // console.log('player prop', props)
    return (
        <div>
            <h3>Player name: {props.firstName} {props.lastName}</h3>
            <p>Jersey number: {props.jerseyNumber}</p>
            <p>Hobbies:</p>
                <ul>{hobbies}</ul>
 
            <hr></hr>
        </div>
    )
}

export default Player