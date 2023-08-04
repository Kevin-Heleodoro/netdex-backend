import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let contacts;

export default class ContactsDAO {
    static async injectDB(connection) {
        if (contacts) return;

        try {
            contacts = await connection
                .db(process.env.NETDEX_COLLECTION)
                .collection('contacts');
        } catch (e) {
            console.error(`Unable to connect to contactsDAO, ${e}`);
        }
    }

    static async addContact(contact, userId) {
        try {
            const contactDoc = {
                ...contact,
                user_id: userId,
            };

            return await contacts.insertOne(contactDoc);
        } catch (e) {
            console.error(`Unable to create contact: ${e}`);
            return { error: e };
        }
    }

    static async addNoteToContact(id, newNote) {
        try {
            const query = { _id: new ObjectId(id) };
            const update = {
                $push: {
                    notes: {
                        date: new Date(),
                        note: newNote,
                    },
                },
            };

            return await contacts.updateOne(query, update);
        } catch (e) {
            console.error(`Unable to add note to contact: ${e}`);
            return { error: e };
        }
    }

    static async getContact(id) {
        try {
            const contact = await contacts.findOne({ _id: new ObjectId(id) });

            return contact;
        } catch (e) {
            console.error(`Unable to get contact by ID: ${e}`);
            throw e;
        }
    }

    static async getAllContacts(userId) {
        let cursor;
        try {
            const query = { user_id: userId };
            const options = {
                sort: { first_name: 1 },
            };

            cursor = await contacts.find(query, options);

            const contactList = await cursor.toArray();
            const totalContacts = await contacts.countDocuments(query);
            return { contactList, totalContacts };
        } catch (e) {
            console.error(`Unable to get all contacts: ${e}`);
            throw e;
        }
    }

    static async updateContact(id, contact) {
        try {
            const filter = { _id: new ObjectId(id) };
            const update = {
                $set: {
                    first_name: contact.first_name,
                    last_name: contact.last_name,
                    email: contact.email,
                    social: contact.social,
                    company: contact.company,
                    position: contact.position,
                },
            };

            const result = await contacts.updateOne(filter, update);

            if (result.modifiedCount === 0) {
                throw Error(`Invalid contact update operation`);
            }

            return result;
        } catch (e) {
            console.error(`Unable to update contact: ${e}`);
            return { error: e };
        }
    }

    static async deleteContact(id) {
        try {
            const filter = { _id: new ObjectId(id) };

            const result = await contacts.deleteOne(filter);

            if (result.deletedCount === 0) {
                throw Error(`Invalid contact delete operation`);
            }

            return result;
        } catch (e) {
            console.error(`Unable to delete contact: ${e}`);
            return { error: e };
        }
    }
}
