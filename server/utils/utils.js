import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../modules/user/User';
import Boom from 'boom';

export const SECRET = 'verySecretHash@!@!';

export default class Utils {

    static async hashPassword(password) {

        const salt = await bcrypt.genSalt(10);

        return await bcrypt.hash(password, salt);

    }

    static createToken(user) {
        const {username, _id} = user;

        return jwt.sign(
            {id: _id, username}, SECRET,
            {algorithm: 'HS256', expiresIn: "1h"}
        );
    }

    static async verifyUniqueUser(req, h) {

        const {payload: {username}, payload} = req;

        const user = await User.findOne({
            username
        });

        if (user) {
            throw Boom.badRequest('Username taken');
        }

        return payload;
    }

    static async verifyCredentials(req, h) {

        const {password, username} = req.payload;

        const user = await User.findOne({
            username
        });
        if (user) {
            const isValid = await bcrypt.compare(password, user.password);

            if (isValid) {
                return user;
            }
            else {
                throw Boom.badRequest('Incorrect password!');
            }

        } else {
            throw Boom.badRequest('Incorrect username or email!');
        }
    }

}