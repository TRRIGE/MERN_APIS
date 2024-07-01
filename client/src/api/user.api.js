import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

const registerUser = async (userData) => {
    try {
        const response = await axios.post(API_URL, userData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

const getUser = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, userData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export { getUser, deleteUser, registerUser, updateUser }