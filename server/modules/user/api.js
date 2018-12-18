import User from "./User";
import Utils from "../../utils/utils";
import Boom from 'boom';

class UserAPi {

    static login(req, h) {
        return h.response({token: Utils.createToken(req.pre.user)}).code(201);
    }

    static async signUp(req, h) {
        const {username, password} = req.payload;

        const user = new User();

        user.username = username;

        try {
             user.password = await Utils.hashPassword(password);

             user.save();

            return h.response({ token: Utils.createToken(user) }).code(201)

        } catch(e){
            throw Boom.badRequest(e);
        }

    }

    static async getUsers(req, h){

        const users = await User.find().select('username');

        return h.response({ users }).code(200)

    }

    static async deleteUser(req, h){

        const {id} = req.params;

        await User.deleteOne({_id: id});

        const users = await User.find().select('username');

        return h.response({ users }).code(200)

    }

}

export default UserAPi;
