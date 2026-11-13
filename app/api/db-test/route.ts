import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import "@/models/User";
import "@/models/Message";

export async function GET() {
  try {
    await connectDB();
    return Response.json({
      ok: true,
      database: mongoose.connection.name,
      models: Object.keys(mongoose.models),
    });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}