import Player from './Player';

function PlayerList(props) {
    const allPlayers = props.players.map(player => {
        return <Player
            firstName={player.firstName}
            lastName={player.lastName}
            jerseyNumber={player.jerseyNumber}
            hobbies={player.hobbies}
        />
    })

    return (allPlayers)

}

export default PlayerList