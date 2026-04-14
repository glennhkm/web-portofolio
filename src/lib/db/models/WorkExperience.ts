import mongoose, { Schema } from "mongoose";

const WorkExperienceSchema = new Schema(
  {
    company: String,
    logo: String,
    position: String,
    period: String,
    location: String,
    type: String,
    order: Number,
    isVisible: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.WorkExperience ||
  mongoose.model("WorkExperience", WorkExperienceSchema);
