import mongodb from 'mongodb';
const ObjectId = mongodb.ObjectId;

let users;

export default class UsersDAO {
    static async injectDB(connection) {
        if (users) return;

        try {
            users = await connection
                .db(process.env.NETDEX_COLLECTION)
                .collection('users');
        } catch (e) {
            console.error(`Unable to connect to UsersDAO: ${e}`);
        }
    }

    static async getUserInfo(id) {
        try {
            const response = await users.findOne({ _id: id });

            return response;
        } catch (e) {
            console.error(`Unable to get user info: ${e}`);
            return { error: e };
        }
    }

    static async createNewUser(user, googleId) {
        try {
            const newUser = {
                ...user,
                _id: googleId,
            };

            return await users.insertOne(newUser);
        } catch (e) {
            console.error(`Unable to create user: ${e}`);
            return { error: e };
        }
    }

    static async updateUser(id, user) {
        try {
            const filter = { _id: id };
            const updates = {
                $set: {
                    ...user,
                },
            };

            return await users.updateOne(filter, updates);
        } catch (e) {
            console.error(`Unable to update user: ${e}`);
            return { error: e };
        }
    }
}
