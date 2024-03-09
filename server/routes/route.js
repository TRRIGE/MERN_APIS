import express from 'express';
import { adduser, getusers, getuser, edituser } from '../controller/user.js'

const router = express.Router();

router.post('/adduser', adduser)

router.get('/allusers', getusers)

router.get('/:id', getuser)

router.post('/:id', edituser)

export default router