import dbConnect from "@/lib/db/mongodb";
import ProjectModel from "@/lib/db/models/Project";
import ContactModel from "@/lib/db/models/Contact";
import WorkExperienceModel from "@/lib/db/models/WorkExperience";
import SiteContentModel from "@/lib/db/models/SiteContent";

export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  github?: string;
  url?: string;
  projectStatus: "live" | "development" | "restricted";
  awardTitle?: string;
  category:
    | "Personal Projects"
    | "Freelance Projects"
    | "Award-Winning Projects";
  cardVariant: "primary" | "secondary" | "third" | "thirdAlternative";
}

export interface Contact {
  id: number;
  name: string;
  icon: string;
  text: string;
  url: string;
}

export interface WorkExperience {
  id: number;
  logo: string;
  company: string;
  position: string;
  period: string;
  location: string;
  type: string;
}

export interface TechCategory {
  variant: "highlight" | "default" | "accent";
  techs: string[];
}

export interface Education {
  institution: string;
  logo: string;
  secondaryLogo?: string;
  degree: string;
  field: string;
  gpa: string;
  organization?: string;
  organizationLogo?: string;
  organizationRole?: string;
}

export interface SiteContent {
  heroGreeting: string;
  typewriterWords: string[];
  aboutTitle: string;
  aboutText: string;
  profileImageUrl: string;
  openToWork: boolean;
  nameDisplay: string;
  mainTechCategories: TechCategory[];
  educations: Education[];
  cvUrl: string;
  contactSectionTitle: string;
  contactSectionDescription: string;
  footerText: string;
}

export async function getProjects(): Promise<Project[]> {
  await dbConnect();
  const docs = await ProjectModel.find({ isVisible: true })
    .sort({ order: 1 })
    .lean();
  return docs.map((doc, index) => ({
    id: index + 1,
    title: doc.title as string,
    description: doc.description as string,
    images: (doc.images as string[]) || [],
    techStack: doc.techStack as string[],
    github: (doc.github as string) || "",
    url: (doc.url as string) || "",
    projectStatus:
      (doc.projectStatus as Project["projectStatus"]) || "development",
    awardTitle: (doc.awardTitle as string) || "",
    category: (doc.category as Project["category"]) || "Personal Projects",
    cardVariant: doc.cardVariant as Project["cardVariant"],
  }));
}

export async function getContacts(): Promise<Contact[]> {
  await dbConnect();
  const docs = await ContactModel.find({ isVisible: true })
    .sort({ order: 1 })
    .lean();
  return docs.map((doc, index) => ({
    id: index + 1,
    name: doc.name as string,
    icon: doc.icon as string,
    text: doc.text as string,
    url: doc.url as string,
  }));
}

export async function getWorkExperiences(): Promise<WorkExperience[]> {
  await dbConnect();
  const docs = await WorkExperienceModel.find({ isVisible: true })
    .sort({ order: 1 })
    .lean();
  return docs.map((doc, index) => ({
    id: index + 1,
    logo: doc.logo as string,
    company: doc.company as string,
    position: doc.position as string,
    period: doc.period as string,
    location: doc.location as string,
    type: doc.type as string,
  }));
}

export async function getSiteContent(): Promise<SiteContent | null> {
  await dbConnect();
  const doc = await SiteContentModel.findOne().lean();
  if (!doc) return null;
  return {
    heroGreeting: doc.heroGreeting as string,
    typewriterWords: doc.typewriterWords as string[],
    aboutTitle: doc.aboutTitle as string,
    aboutText: doc.aboutText as string,
    profileImageUrl: doc.profileImageUrl as string,
    openToWork: doc.openToWork as boolean,
    nameDisplay: doc.nameDisplay as string,
    mainTechCategories: (doc.mainTechCategories as TechCategory[]) || [],
    educations: (doc.educations as Education[]) || [],
    cvUrl: (doc.cvUrl as string) || "",
    contactSectionTitle: doc.contactSectionTitle as string,
    contactSectionDescription: doc.contactSectionDescription as string,
    footerText: doc.footerText as string,
  };
}
