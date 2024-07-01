import express from 'express';
import { getUsers, createUser, getUserById, updateUser, deleteUser } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.route("/")
    .post(createUser)
    .get(getUsers);

userRouter.route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

export default userRouter;