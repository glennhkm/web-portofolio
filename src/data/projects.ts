export interface Project {
    id: number
    title: string
    description: string
    image1: string
    image2: string
    techStack: string[]
    github: string
    url: string
    cardVariant: "primary" | "secondary" | "third" | "thirdAlternative"
}

export const projects: Project[] = [
    {
        id: 1,
        title: "PULMOHEALTH: RULE BASED AI WEB",
        description: "We are an AI-based platform that helps diagnose lung diseases such as TB, COPD, Asthma, Lung Cancer, and Pneumonia. Through analyzing answers to a series of questions, PulmoHealth provides a fast, accurate, and easily accessible lung health assessment, supporting you in maintaining lung health with reliable insights.",
        image1: "https://utfs.io/f/WjLJ1ngIOkg62Wik69Tr3w1jhXCuZ8UnqBE2gVOvTMcxHiYN",
        image2: "https://utfs.io/f/WjLJ1ngIOkg6W7Z2bxCgIOkg6hwXEUlstTWujmAG1zYv8xLJ",
        techStack: ["Next JS", "Vercel"],
        github: "https://github.com/glennhkm/Diagnosa-Penyakit-Paru-paru",
        url: "https://pulmohealth.glennhkm.me",
        cardVariant: "thirdAlternative"
    },
    {
        id: 2,
        title: "FASHA KULINER: CULINARY E-COMMERCE",
        description: "Welcome to Fasha Kuliner, the ultimate destination for enjoying traditional Acehnese food and beverages. Established since 2024, we are committed to bringing authentic Acehnese flavors to your table. Thank you for choosing us to fulfill your culinary needs.",
        image1: "https://utfs.io/f/WjLJ1ngIOkg6RXenuwWIF5kQfJuwHK9YGxp7PyS3WvLcBjso",
        image2: "https://utfs.io/f/WjLJ1ngIOkg63uvQHnwVZbCWEFH2TDkVjUlA7nOxGB5duQqf",
        techStack: ["Next JS", "CockroachDB", "Vercel"],
        github: "https://github.com/glennhkm/Culinary-E-Commerce",
        url: "https://fashakuliner.glennhkm.me",
        cardVariant: "primary"
    },
    {
        id: 3,
        title: "NBA NEWS SEARCH ENGINE WEBSITE",
        description: "This Search Engine uses WebSocket (Socket.IO) for real-time comparison of Cosine and Jaccard similarity in processing crawled data from nba.com/news, delivering precise and efficient NBA news retrieval.",
        image1: "https://utfs.io/f/WjLJ1ngIOkg6gfwtUMqTnAZ95QchX7jgJzVDHdUBP0SYa4fm",
        image2: "https://utfs.io/f/WjLJ1ngIOkg6BlUWJFRLGoST8Xy6cP5BInsEOe7ZC4rbuvU2",
        techStack: ["Next JS", "Flask", "Socket IO", "Mongo DB", "Netlify"],
        github: "https://github.com/glennhkm/NBA_News_Search_Engine",
        url: "https://nba-ir.glennhkm.me",
        cardVariant: "secondary"
    },
    {
        id: 4,
        title: "INFORMATICS FESTIVAL WEBSITE",
        description: "INFEST 2024 by the Informatics Department, Syiah Kuala University, is here with inspiring tech and self-development seminars, UI/UX competitions, COINS for high schoolers, Mobile Legends tournaments, creative exhibitions, and tasty food stalls. Join us in fostering technology and creativity to shape competitive human resources!",
        image1: "https://utfs.io/f/WjLJ1ngIOkg6yKIawkXJP8WZFrU0TL75tYmuHqceQhioBCw2",
        image2: "https://utfs.io/f/WjLJ1ngIOkg6UKDz0ohZCIFmfHSYhW4A9Op7JUNeQw3u1cio",
        techStack: ["Next JS", "Vercel"],
        github: "https://github.com/HMIF-USK/web-infest",
        url: "https://infest.hmif-usk.org",
        cardVariant: "thirdAlternative"
    },
]