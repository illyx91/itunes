import Utils from "../../utils/utils";
import Boom from 'boom';
import axios from 'axios';
import SearchTerm from './SearchTerm';
import User from "../user/User";

export default class TuneApi {

    /**
     * search for tunes
     * @param req
     * @param h
     * @returns {Promise.<void>}
     */
    static async getTunes(req, h) {

        const {name} = req.query;

        const {credentials: {id}} = req.auth;

        const user = await User.findById(id);

        if (user.searchTerms.map((searchTerm) => searchTerm.name).includes(name)) {

            const tune = user.searchTerms.find((tune) => tune.name === name);

            tune.count += 1;

        } else {
            user.searchTerms.push({name, count: 1})
        }

        await user.save();

        const res = await axios.get(`https://itunes.apple.com/search?term=${name.replace(' ', '+')}&limit=25&entity=musicTrack`)

        return h.response({...res.data}).code(200);
    }

    /**
     * get most searched
     * @param req
     * @param h
     * @returns {Promise.<void>}
     */
    static async getMostSearched(req, h) {

        const {credentials: {id}} = req.auth;

        const user = await User.findById(id);

        const topSearched = user.searchTerms.sort((a, b) => b.count - a.count)
            .filter((searchTerm, i) => i < 10);

        return h.response(topSearched).code(200);

    }

}