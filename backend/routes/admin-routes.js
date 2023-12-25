const express = require('express');
const adminRouter = express.Router;

adminRouter.get('/signup', addAdmin);
adminRouter.post('/login', adminLogin);
adminRouter.post('/', getAdmin);
adminRouter.post('/:id', getAdminByID);