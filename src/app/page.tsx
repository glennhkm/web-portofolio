import HomeClient from "@/components/home/homeClient";
import {
  getProjects,
  getContacts,
  getWorkExperiences,
  getSiteContent,
} from "@/lib/db/queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const [projects, contacts, workExperiences, siteContent] = await Promise.all([
    getProjects(),
    getContacts(),
    getWorkExperiences(),
    getSiteContent(),
  ]);

  // Fallback if site content hasn't been seeded yet
  const defaultContent = {
    heroGreeting: "Hola, I'm Glenn 👋🏼",
    typewriterWords: ["Web Developer in the Arena", "Machine Learning Enthusiast"],
    aboutTitle: "WHO AM I?",
    aboutText: "",
    profileImageUrl: "",
    openToWork: true,
    nameDisplay: "GLENN HAKIM",
    mainTechCategories: [],
    educations: [],
    cvUrl: "",
    contactSectionTitle: "Hit Me Up",
    contactSectionDescription: "",
    footerText: "© 2025 Glenn Hakim. All rights reserved",
  };

  return (
    <HomeClient
      projects={projects}
      contacts={contacts}
      workExperiences={workExperiences}
      siteContent={siteContent || defaultContent}
    />
  );
}
