const API_ENDPOINT = "http://localhost:3000";

const USERS_URL = `${API_ENDPOINT}/users`;
const SIGN_IN_URL = `${API_ENDPOINT}/signin`;
const VALIDATE_URL = `${API_ENDPOINT}/validate`; // TODO

const RESTAURANTS_URL = `${API_ENDPOINT}/restaurants`;

// YELP API

const getRestaurants = (location, category) => {
    const url = `${RESTAURANTS_URL}?location=${location}&category=${category}`
    return get(url)
}

const getRestaurant = (businessId) => {
    const url = `${RESTAURANTS_URL}/${businessId}`
    return get(url)
}

const getRestaurantReviews = (businessId) => {
    const url = `${RESTAURANTS_URL}/${businessId}/reviews`
    return get(url)
}

// USER CREATION & AUTHENTICATION

const createUser = (userData) => {
    let configObject = generateConfigObject("POST", userData)
    return post(USERS_URL, configObject).then(console.log)
}

const signIn = (email, password) => {
    let data = {
        email: email,
        password: password 
    }
    post(SIGN_IN_URL, data).then(setTokenToLocalStorage)
}

const signOut = () => {
    localStorage.removeItem("token")
}

const setTokenToLocalStorage = (resp) => {
    localStorage.setItem("token", resp.token)
}


// HELPER METHODS

const get = (url) => {
    return fetch(url).then(resp => resp.json())
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


export default {
    getRestaurants,
    getRestaurant,
    getRestaurantReviews,
    createUser,
    signIn, 
    signOut
}