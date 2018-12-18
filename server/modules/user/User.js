import mongoose from 'mongoose';
import {searchTermSchema} from '../search-term/SearchTerm';

const Schema = mongoose.Schema;

//user schema definition
const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true},
        password: { type: String, required: true },
        searchTerms: [{ type: searchTermSchema}]
    },
    {
        versionKey: false
    }
);


export default mongoose.model('user', userSchema);