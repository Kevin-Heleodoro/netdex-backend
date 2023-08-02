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
            return await users.findOne({ _id: new ObjectId(id) });
            // .aggregate([
            //     { $match: { _id: new ObjectId(id) } },
            //     {
            //         $lookup: {
            //             from: 'contacts',
            //             localField: '_id',
            //             foreignField: 'user_id',
            //             as: 'contacts',
            //         },
            //     },
            // ])
            // .next();
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

    // update user
}
