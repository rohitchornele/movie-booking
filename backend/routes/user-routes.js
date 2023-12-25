const express = require('express');
const userRouter = express.Router;

userRouter.get('/', getAllUsers);
userRouter.post('/signup', signUp);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);
userRouter.post('/:login', login);
userRouter.get('/booking/:id', getBookingofUser);
userRouter.get('/:id', getUserbyId);

module.exports = userRouter;