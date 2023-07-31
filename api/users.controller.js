import UsersDAO from '../dao/usersDAO.js'

export default class UsersController {
    static async apiGetUserInfo(req, res, next) {
        try {
            let id = req.params.userId;
            let userInfo = await UsersDAO.getUserInfo(id);

            if (!userInfo) {
                res.status(404).json({error: 'user not found'})
            }

            res.json(userInfo)
        } catch (e) {
            console.error(`Failed to GetUserInfo: ${e}`)
            res.status(500).json({error: e})
        }
    }
}