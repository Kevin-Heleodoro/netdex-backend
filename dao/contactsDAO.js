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
                user_id: new ObjectId(userId),
            };

            return await contacts.insertOne(contactDoc);
        } catch (e) {
            console.error(`Unable to create contact: ${e}`);
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
}
