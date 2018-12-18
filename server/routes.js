import UserAPi from "./modules/user/api";
import Utils from "./utils/utils";
import TuneApi from "./modules/search-term/api";

const METHODS = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

const ROUTES = [
    {
        method: METHODS.POST,
        path: '/api/login',
        config: {
            handler: UserAPi.login,
            pre: [
                {method: Utils.verifyCredentials, assign: 'user'}
            ],
            auth: false

        }
    },
    {
        method: METHODS.POST,
        path: '/api/signup',
        config: {

            handler: UserAPi.signUp,
            pre: [
                {method: Utils.verifyUniqueUser},
            ],
            auth: false
        }

    },
    {
        method: METHODS.GET,
        path: '/api/tunes',
        config: {
            handler: TuneApi.getTunes,
        }
    },
    {
        method: METHODS.GET,
        path: '/api/tunes/popular',
        config: {
            handler: TuneApi.getMostSearched,
        }
    },
    {
        method: METHODS.GET,
        path: '/api/users',
        config: {
            handler: UserAPi.getUsers,
        }
    },
    {
        method: METHODS.DELETE,
        path: '/api/users/{id?}',
        config: {
            handler: UserAPi.deleteUser,
        }
    },
];

export default ROUTES;