import Hapi from 'hapi';

import mongoose from 'mongoose';
import routes from "./routes";
import {SECRET} from "./utils/utils";
import hapiAuthJwt from 'hapi-auth-jwt2';
import User from './modules/user/User';

const MongoDBUrl = 'mongodb://localhost:27017/itunes';

const server = new Hapi.Server(
    {
        host: 'localhost',
        port: 3001,
        routes: {
            cors: {
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with'],
                headers: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"]
            },
        }
    }
);


(async () => {
    try {

        await server.register(hapiAuthJwt);

        server.auth.strategy('jwt', 'jwt', {
            key: SECRET,
            verifyOptions: {algorithms: ['HS256']},
            validate: async (decoded) => {

                const user = await User.findOne({
                    _id: decoded.id
                });

                return {isValid: !!user};
            }
        });

        server.auth.default('jwt');

        server.route(
            routes
        );

        await server.start();

        mongoose.connect(MongoDBUrl, {useNewUrlParser: true})
            .then(() => {
                console.log(`Connected to Mongo server`)
            }, err => {
                console.log(err)
            });
        console.log('Server is running on port 3001');

    }
    catch (err) {
        console.log(err)
    }
})();


