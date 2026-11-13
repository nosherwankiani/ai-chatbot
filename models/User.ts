import mongoose, { Schema, Model, InferSchemaType } from "mongoose";

const UserSchema = new Schema(
  {
    // The user's ID from Clerk (e.g. "user_2abc...") is our link to auth.
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, default: "" },
    name: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

export type IUser = InferSchemaType<typeof UserSchema>;

// `mongoose.models.User` prevents "OverwriteModelError" during hot reloads.
const User: Model<IUser> =
  (mongoose.models.User as Model<IUser>) ||
  mongoose.model<IUser>("User", UserSchema);

export default User;
