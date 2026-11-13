import mongoose, { Schema, Model, InferSchemaType } from "mongoose";

const MessageSchema = new Schema(
  {
    // Which user owns this message (Clerk user ID).
    clerkId: { type: String, required: true },

    // Groups messages into one conversation. We use "default" for a single
    // ongoing chat per user, but this lets you add multiple chats later.
    conversationId: { type: String, required: true, default: "default" },

    role: { type: String, enum: ["user", "assistant"], required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

// Fast lookup of "this user's conversation, oldest first" (the memory query).
MessageSchema.index({ clerkId: 1, conversationId: 1, createdAt: 1 });

export type IMessage = InferSchemaType<typeof MessageSchema>;

const Message: Model<IMessage> =
  (mongoose.models.Message as Model<IMessage>) ||
  mongoose.model<IMessage>("Message", MessageSchema);

export default Message;