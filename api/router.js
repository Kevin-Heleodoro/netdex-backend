import express from 'express';
import UsersController from './users.controller.js';
import ContactsController from './contacts.controller.js';

const router = express.Router();

router.route('/users/:id').get(UsersController.apiGetUserInfo);
router.route('/users/new').post(UsersController.apiCreateUser);

router.route('/contacts/').post(ContactsController.apiPostContact);
router.route('/contacts/:id').get(ContactsController.apiGetOneContact);
router.route('/contacts/:id').put(ContactsController.apiUpdateContact);
router.route('/contacts/all/:userId').get(ContactsController.apiGetAllContacts);
router.route('/contacts/notes/new/:id').post(ContactsController.apiPostNewNote);

export default router;
