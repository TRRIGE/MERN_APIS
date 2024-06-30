import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

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
export { getUser, deleteUser }