import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
	name: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}

const UserSchema: Schema = new Schema({
	name: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
});

UserSchema.pre<IUser>('save', function (next) {
	this.updatedAt = new Date();
	next();
});

const User = model<IUser>('User', UserSchema);

export default User;
