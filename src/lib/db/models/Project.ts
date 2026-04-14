import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: String,
    description: String,
    images: [String],
    techStack: [String],
    github: String,
    url: String,
    projectStatus: {
      type: String,
      enum: ["live", "development", "restricted"],
      default: "development",
    },
    awardTitle: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: ["Personal Projects", "Freelance Projects", "Award-Winning Projects"],
    },
    cardVariant: {
      type: String,
      enum: ["primary", "secondary", "third", "thirdAlternative"],
    },
    order: Number,
    isVisible: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
