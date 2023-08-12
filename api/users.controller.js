import UsersDAO from '../dao/usersDAO.js';

export default class UsersController {
    static async apiGetUserInfo(req, res, next) {
        try {
            let id = req.params.id;
            let userInfo = await UsersDAO.getUserInfo(id);

            if (!userInfo) {
                res.status(404).json({ error: 'user not found' });
                return;
            } else {
                res.json(userInfo);
            }
        } catch (e) {
            console.error(`Failed to get user info: ${e}`);
            res.status(500).json({ error: e });
        }
    }

    static async apiCreateUser(req, res, next) {
        try {
            let newUser = {
                email: req.body.email,
                last_name: req.body.last_name,
                first_name: req.body.first_name,
            };
            let { googleId } = req.body;

            const response = await UsersDAO.createNewUser(newUser, googleId);

            var { error } = response;

            if (error) {
                res.status(500).json({ error: 'Unable to create user' });
            } else {
                res.json({
                    status: 'success',
                    response,
                });
            }
        } catch (e) {
            console.error(`Failed to create new user: ${e}`);
            res.status(500).json({ error: e });
        }
    }

    static async apiUpdateUser(req, res, next) {
        try {
            let { id } = req.params;
            let updatedUser = { ...req.body };

            const response = await UsersDAO.updateUser(id, updatedUser);

            var { error } = response;

            if (error) {
                res.status(500).json({ error: `Unable to update user: ${e}` });
            } else {
                res.json({
                    status: 'success',
                    response,
                });
            }
        } catch (e) {
            console.error(`Failed to update user: ${e}`);
            res.status(500).json({ error: e });
        }
    }
}
