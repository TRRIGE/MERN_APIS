import mongoose from "mongoose";

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@datacheck.vhwifeh.mongodb.net/?retryWrites=true&w=majority&appName=DataCheck`
    try {
        await mongoose.connect(URL);
        console.log('database connection established')
    } catch (error) {
        console.log('error while connecting with tha database', error);
    }
}

export default Connection