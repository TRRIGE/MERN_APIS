import User from "../models/user.model.js";

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);

        if (!user) {
            return res.status(404).json({ message: `User with id ${id} not found` });
        }

        const updateUser = await User.findById(id);
        res.status(200).json(updateUser);

    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({ message: `User with id ${id} deleted successfully` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export { createUser, getUsers, updateUser, getUserById, deleteUser };