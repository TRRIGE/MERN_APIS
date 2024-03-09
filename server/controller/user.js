import User from '../model/user.js'

export const adduser = async (req, res) => {
    const user = req.body;

    const newUser = new User(user)
    // console.log(newUser)

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

export const getusers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const getuser = async (req, res) => {
    try {
        const user = await User.find({ _id: req.params.id })
        // const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const edituser = async (req, res) => {

    let user = req.body
    const edituser = new User(user)

    try {
        await User.updateOne({ _id: req.params.id }, edituser)
        res.status(201).json(edituser)
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}