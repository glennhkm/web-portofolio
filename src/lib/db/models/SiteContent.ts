import mongoose, { Schema } from "mongoose";

const TechCategorySchema = new Schema(
  {
    variant: {
      type: String,
      enum: ["highlight", "default", "accent"],
    },
    techs: [String],
  },
  { _id: false }
);

const EducationSchema = new Schema(
  {
    institution: String,
    logo: String,
    secondaryLogo: String,
    degree: String,
    field: String,
    gpa: String,
    organization: String,
    organizationLogo: String,
    organizationRole: String,
  },
  { _id: false }
);

const SiteContentSchema = new Schema(
  {
    heroGreeting: String,
    typewriterWords: [String],
    aboutTitle: String,
    aboutText: String,
    profileImageUrl: String,
    openToWork: Boolean,
    nameDisplay: String,
    mainTechCategories: [TechCategorySchema],
    educations: [EducationSchema],
    cvUrl: String,
    contactSectionTitle: String,
    contactSectionDescription: String,
    footerText: String,
  },
  { timestamps: true }
);

export default mongoose.models.SiteContent ||
  mongoose.model("SiteContent", SiteContentSchema);
