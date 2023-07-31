import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId

let users;

export default class UsersDAO {
    static async injectDB(connection) {
        if (users) return;

        try {
            users = await connection
                .db(process.env.NETDEX_COLLECTION)
                .collection('users')
        } catch(e) {
            console.error(`Unable to connect to UsersDAO: ${e}`)
        }
    }

    static async getUserInfo(id) {
        try {
            return await users.find({$match: {_id: new ObjectId(id)}})
        } catch(e) {
            console.error(`Unable to get user info: ${e}`)
            throw e;
        }
    }
}