import axios from 'axios';

const URL = 'http://localhost:8000'

export const addUserAPI = async (data) => {
    try {
        return await axios.post(`${URL}/adduser`, data)
    } catch (error) {
        console.log(`Error while calling add user api ${error}`)
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${URL}/allusers`)
    } catch (error) {
        console.log(`Error while calling getUsers api ${error}`)
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(`Error while calling getUser api ${error}`)
    }
}

export const editUserAPI = async (user, id) => {
    try {
        return await axios.post(`${URL}/${id}`, user)
    } catch (error) {
        console.log(`Error while calling editUser api ${error}`)
    }
}