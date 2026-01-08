import mongoose, { Document, Schema, SchemaType } from "mongoose";
const schema = new Schema({
    name: {
        type: String,
        requires: true,
    },
    email: {
        type: String,
        requires: true,
        unique: true,
    }
}, {
    timestamps: true,
});
export const User = mongoose.model("User", schema);
