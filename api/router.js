import express from 'express';
import UsersController from './users.controller.js';
import ContactsController from './contacts.controller.js';

const router = express.Router();

router.route('/users/:id').get(UsersController.apiGetUserInfo);

router.route('/contacts/').post(ContactsController.apiPostContact);
router.route('/contacts/:id').get(ContactsController.apiGetOneContact);
router.route('/contacts/:id').put(ContactsController.apiUpdateContact);

export default router;
