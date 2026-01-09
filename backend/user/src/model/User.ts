import mongoose,{Document,Schema, SchemaType} from "mongoose";

export interface IUser extends Document{
    name: string;
    email: string;
}

const schema: Schema<IUser> = new Schema({
    name:{
        type: String,
        requires: true,
    },
    email:{
        type: String,
        requires: true,
        unique: true,
    }
},{
    timestamps: true,
});

export const User = mongoose.model<IUser>("User",schema);






