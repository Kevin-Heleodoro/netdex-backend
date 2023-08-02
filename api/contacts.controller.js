import ContactsDAO from '../dao/contactsDAO.js';

export default class ContactsController {
    static async apiPostContact(req, res, next) {
        try {
            const newContact = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                social: {
                    linkedin: req.body.linkedin,
                },
                notes: [
                    {
                        date: new Date(),
                        note: req.body.note,
                    },
                ],
                company: req.body.company,
                position: req.body.position,
            };

            const userId = req.body.user_id;

            const response = await ContactsDAO.addContact(newContact, userId);

            var { error } = response;

            if (error) {
                res.status(500).json({ error: 'Unable to create contact' });
            } else {
                res.json({
                    status: 'success',
                    response,
                });
            }
        } catch (e) {
            console.log(`Contacts Controller: ${e}`);
            res.status(500).json({ error: e });
        }
    }

    static async apiGetOneContact(req, res, next) {
        try {
            let id = req.params.id || {};
            let contact = await ContactsDAO.getContact(id);

            if (!contact) {
                res.status(404).json({ error: 'contact not found' });
            }

            res.json(contact);
        } catch (e) {
            console.log(`Contacts Controller: ${e}`);
            res.status(500).json({ error: e });
        }
    }

    static async apiUpdateContact(req, res, next) {
        try {
            let id = req.params.id;
            const updatedContact = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                social: {
                    linkedin: req.body.linkedin,
                },
                notes: [
                    {
                        date: new Date(),
                        note: req.body.note,
                    },
                ],
                company: req.body.company,
                position: req.body.position,
            };

            let response = await ContactsDAO.updateContact(id, updatedContact);

            var { error } = response;

            if (error) {
                res.status(500).json({ error: 'unable to update contact' });
            } else {
                res.json({
                    status: 'success',
                    response,
                });
            }
        } catch (e) {
            console.log(`Contacts Controller: ${e}`);
            res.status(500).json({ error: e });
        }
    }
}
