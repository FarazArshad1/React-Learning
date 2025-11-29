function CheckMessage() { 
    const hasMessage = true;

    return (
        <div>
            {hasMessage && <h1>You have a new message!</h1>}
        </div>
    )
}

export default CheckMessage;