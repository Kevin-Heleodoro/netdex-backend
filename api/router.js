import express from 'express'
import UsersController from './users.controller.js'
import ContactsController from './contacts.controller.js'

const router = express.Router()

router.route('/id/:id').get(UsersController.apiGetUserInfo);

export default router;