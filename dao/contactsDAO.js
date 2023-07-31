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
}
