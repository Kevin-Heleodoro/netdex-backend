import mongodb from 'mongodb';
import dotenv from 'dotenv';

import app from './server.js';
import ContactsDAO from './dao/contactsDAO.js';
import UsersDAO from './dao/usersDAO.js';

async function main() {
    dotenv.config();
    const client = new mongodb.MongoClient(process.env.NETDEX_DB_URI);
    const port = process.env.PORT || 8000;
    try {
        await client.connect();
        await ContactsDAO.injectDB(client);
        await UsersDAO.injectDB(client);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

main().catch(console.error);

export default app;
