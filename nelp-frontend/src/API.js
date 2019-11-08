const API_ENDPOINT = "http://localhost:3000";
const USERS_URL = `${API_ENDPOINT}/users`;
const RESTAURANTS_URL = `${API_ENDPOINT}/restaurants`;

// Take out console.log when you are ready to save the data to state
const getRestaurants = () => {
    return get(RESTAURANTS_URL).then(console.log)
}

// HELPER METHODS

const get = url => {
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
    get, 
    post
}

const user = {
    first_name: "Test",
    last_name: "User",
    email: "testuser@gmail.com",
    password: "password1"
}