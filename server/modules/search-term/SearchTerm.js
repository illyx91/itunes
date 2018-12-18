/**
 * Created by mac on 15/12/2018.
 *
 * Decor Advanced Web Solutions
 * www.decor-d.com
 *
 * File description:
 */

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const searchTermSchema = new Schema(
    {
        name: { type: String, required: true },
        count: { type: Number, required: true },
    },
    {
        versionKey: false
    }
);

export default mongoose.model('search-term', searchTermSchema);