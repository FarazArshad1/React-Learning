function ValidateLogin() {

    const isLoggedIn = false
    let message;

    if (isLoggedIn) {
        message = <h1>Loged In Successfully</h1>
    }
    else {
        message = <h1>Loged In UnSuccessfully</h1>
    }

    return <div>{message}</div>
}

export default ValidateLogin;