const url1 = 'https://us-central1-nodemcu-thesis-db.cloudfunctions.net/app/adminLogin'

const url = 'http://localhost:3000/adminLogin'
export const adminLogin = async (email, password) => {
    const response = await fetch(url, {
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify({'email' : email, 'password' : password})
    })

    // const result = await response.json();
    // return result;
    if (response.ok) {return true}

    const errMessage = await response.text()
    throw new Error(errMessage)
}