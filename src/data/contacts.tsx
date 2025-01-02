import { Email } from "@/components/icons/email";
import { Github } from "@/components/icons/github";
import { Instagram } from "@/components/icons/instagram";
import { Linkedin } from "@/components/icons/linkedin";
import { Whatsapp } from "@/components/icons/whatsapp";

export interface Contact {
    id: number;
    name: string;
    text: string;
    url: string;
    icon: JSX.Element;
}

export const contacts: Contact[] = [
    {
        id: 1,
        name: "Email",
        text: "Have a question or project in mind? Send me an email and let's discuss your ideas.",
        url: "mailto:glenn.hkm@gmail.com",
        icon: <Email className="w-10 h-10 xs:w-12 xs:h-12 lg:w-24 lg:h-24 "/>
    },
    {
        id: 2,
        name: "Whatsapp",
        text: "Need a quick response? Reach out to me on WhatsApp and let's talk!",
        url: "https://api.whatsapp.com/send?phone=6282284282780",
        icon: <Whatsapp className="w-8 h-8 xs:w-10 xs:h-10 lg:w-20 lg:h-20"/>
    },
    {
        id: 3,
        name: "Instagram",
        text: "Follow my journey, see my work, and connect with me on Instagram.",
        url: "https://www.instagram.com/glennhkm",
        icon: <Instagram className="w-8 h-8 xs:w-10 xs:h-10 lg:w-20 lg:h-20"/>
    },
    {
        id: 4,
        name: "Github",
        text: "Check out my code, explore my projects, and collaborate with me on GitHub.",
        url: "https://github.com/glennhkm",
        icon: <Github className="w-8 h-8 xs:w-10 xs:h-10 lg:w-20 lg:h-20"/>
    },
    {
        id: 5,
        name: "Linkedin",
        text: "Let’s connect on LinkedIn and grow our professional network together.",
        url: "https://www.linkedin.com/in/glennhakim/",
        icon: <Linkedin className=" w-7 h-7 xs:w-9 xs:h-9 lg:w-16  lg:h-16 "/>
    }
]
