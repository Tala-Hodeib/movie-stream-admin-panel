//const url1 = 'https://us-central1-nodemcu-thesis-db.cloudfunctions.net/app/adminLogin'

export const baseUrl = 'https://us-central1-nodemcu-thesis-db.cloudfunctions.net/app/'

//const url = 'http://localhost:3001/adminLogin'
export const adminLogin = async (email, password) => {
    const response = await fetch(`${baseUrl}adminLogin`, {
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

export const uploadMovies = async (data) => {
    const response = await fetch(`${baseUrl}movies`, {
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(data)
    })

    if (response.ok) {return response.json()}
    const errMessage = await response.message
    throw new Error(errMessage)
} 

// export const updatMovies = async (data) => {
//     const response = await fetch(`${baseUrl}update`, {
//         method : 'PUT',
//         headers : {'content-type' : 'application/json'},
//         body : JSON.stringify(data)
//     })

//     if (response.ok) return response.json()
//      const errMessage = await response.json().message
//      throw new Error(errMessage)
// }