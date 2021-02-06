function Welcome() {
    const currentHour = new Date().getHours()
    const message = currentHour < 5 ? "why are you still awake dumbfuck. go to sleep"
        : currentHour < 12 ? "good morning"
        : currentHour < 18 ? "good afternoon"
        : "good night"

    return (
        <>
            <h4>{message} bitches</h4>
            <h2>Welcome baseball fans!</h2>
        </>
    )
}

export default Welcome