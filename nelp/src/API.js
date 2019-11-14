import bad_restaurants from './data/bad_restaurants'

const API_ENDPOINT = "http://localhost:3000";

const USERS_URL = `${API_ENDPOINT}/users`;
const SIGN_IN_URL = `${API_ENDPOINT}/signin`;
const VALIDATE_URL = `${API_ENDPOINT}/validate`; // TODO

const RESTAURANTS_URL = `${API_ENDPOINT}/restaurants`;

const SAVED_RESTAURANTS_URL = `${API_ENDPOINT}/saved_restaurants`

// YELP API


const getRestaurants = (category =  "all") => {
    const url = `${RESTAURANTS_URL}?location=london&category=${category}`
    return get(url).then(console.log)

}

const getRestaurant = (businessId) => {
    const url = `${RESTAURANTS_URL}/${businessId}`
    return get(url)
}

const saveRestaurant = (businessId) => {
    return post(SAVED_RESTAURANTS_URL, {
        headers: {
            Authorization: localStorage.getItem('token')
        },
        parameters: {
            token: localStorage.getItem('token'),
            restaurant_id: businessId
        }
    }).then(console.log)
}

// 1i1O-Eg1L8ZWbtjtzi5n1Q

const getRestaurantReviews = (businessId) => {
    const url = `${RESTAURANTS_URL}/${businessId}/reviews`
    return get(url)
}


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
    saveRestaurant,
    createUser,
    signIn, 
    signOut,
    get,
    validate
}