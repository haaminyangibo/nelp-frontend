import bad_restaurants from './data/bad_restaurants'

const API_ENDPOINT = "http://localhost:3000";

const USERS_URL = `${API_ENDPOINT}/users`;
const SIGN_IN_URL = `${API_ENDPOINT}/signin`;
const VALIDATE_URL = `${API_ENDPOINT}/validate`; // TODO
const location = "london"

const RESTAURANTS_URL = `${API_ENDPOINT}/restaurants`;


// YELP API

const getRestaurants = (category) => {
    // debugger
    const url = `${RESTAURANTS_URL}?location=${location}&category=${category}`
    // debugger
    return get(url).then(console.log)
}

const getRestaurant = (businessId) => {
    const url = `${RESTAURANTS_URL}/${businessId}`
    return get(url)
}

const getRestaurantReviews = (businessId) => {
    const url = `${RESTAURANTS_URL}/${businessId}/reviews`
    return get(url)
}


// NEEDS TO RUN IN APP.js 
const getWorstReviewedRestaurants = () => {
    let badRestaurantsData = []
    bad_restaurants.forEach(business_id => {
        getRestaurant(business_id).then(resp => badRestaurantsData.push(resp))
    })
    return badRestaurantsData
}


// USER CREATION & AUTHENTICATION

const createUser = (userData) => {
    let configObject = generateConfigObject("POST", userData)
    return post(USERS_URL, configObject)
}

const signIn = (email, password) => {
    let data = {
        email: email,
        password: password 
    }
    return post(SIGN_IN_URL, data)
}

const validate = () => {
    return fetch(VALIDATE_URL, {
        headers: {
            Authorization: localStorage.getItem('token')
        } 
    }).then(resp => resp.json())
}

const signOut = () => {
    localStorage.removeItem("token")
}

const setTokenToLocalStorage = (resp) => {
    debugger
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
    getWorstReviewedRestaurants,
    createUser,
    signIn, 
    signOut,
    get,
    validate
}