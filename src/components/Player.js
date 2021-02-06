function Player(props) {

    const hobbies = props.hobbies.map(hobby => {
        return <li>{hobby}</li>
        
    })
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