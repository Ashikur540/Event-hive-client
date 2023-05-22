
// dealing with tokens in client side

export const setAuthToken = user => {
    const currentUser = {
        email: user.email,

    }

    fetch(`http://localhost:5000/user/${user?.email}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // save to LS
            localStorage.setItem('Eventhive-token', data.token)
        })
}


//to set token every time user sign in or sign up