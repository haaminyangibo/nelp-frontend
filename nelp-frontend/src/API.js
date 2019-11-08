const API_ENDPOINT = "http://localhost:3000";

const USERS_URL = `${API_ENDPOINT}/users`;
const SIGN_IN_URL = `${API_ENDPOINT}/signin`;
const VALIDATE_URL = `${API_ENDPOINT}/validate`;

const RESTAURANTS_URL = `${API_ENDPOINT}/restaurants`;

// YELP API

const getRestaurants = (location, category) => {
    let parameters = {
        location: location,
        category: category
    }

    let configObject = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        params: JSON.stringify(parameters)
    }
    return get(RESTAURANTS_URL, configObject)
}

// USER CREATION & AUTHENTICATION

const createUser = (userData) => {
    let configObject = generateConfigObject("POST", userData)
    debugger
    return post(USERS_URL, configObject).then(console.log)
}

const signIn = (email, password) => {
    let data = {
        email: email,
        password: password 
    }
    post(SIGN_IN_URL, data).then(console.log)
    // returns first_name and token -> save this to state!
}

// HELPER METHODS

const get = (url, configObject) => {
    return fetch(url, configObject).then(resp => resp.json())
}

const post = (url, data) => {
    let configObject = generateConfigObject("POST", data);
    return fetch(url, configObject).then(resp => resp.json())
}

const generateConfigObject = (method, data) => {
    return {
        method: method, 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}



const user = {
    first_name: "Test2",
    last_name: "User2",
    email: "testuser@gmail.com",
    password: "password1"
}

export default {
    getRestaurants,
    createUser,
    signIn
}