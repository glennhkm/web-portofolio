import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    name: String,
    icon: {
      type: String,
      enum: ["email", "whatsapp", "instagram", "github", "linkedin"],
    },
    text: String,
    url: String,
    order: Number,
    isVisible: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
