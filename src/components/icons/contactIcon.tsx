import { Email } from "@/components/icons/email";
import { Github } from "@/components/icons/github";
import { Instagram } from "@/components/icons/instagram";
import { Linkedin } from "@/components/icons/linkedin";
import { Whatsapp } from "@/components/icons/whatsapp";

const iconMap: Record<string, (className: string) => JSX.Element> = {
  email: (cls) => <Email className={cls} />,
  whatsapp: (cls) => <Whatsapp className={cls} />,
  instagram: (cls) => <Instagram className={cls} />,
  github: (cls) => <Github className={cls} />,
  linkedin: (cls) => <Linkedin className={cls} />,
};

export const ContactIcon = ({ name }: { name: string }) => {
  const renderIcon = iconMap[name.toLowerCase()];
  if (!renderIcon) return null;

  const isSmaller = name.toLowerCase() === "linkedin";
  const className = isSmaller
    ? "w-7 h-7 xs:w-9 xs:h-9 ipad-horizontal:w-11 ipad-horizontal:h-11 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18"
    : name.toLowerCase() === "email"
      ? "w-10 h-10 xs:w-12 xs:h-12 ipad-horizontal:w-16 ipad-horizontal:h-16 lg:w-20 lg:h-20 xl:w-22 xl:h-22 2xl:w-24 2xl:h-24"
      : "w-8 h-8 xs:w-10 xs:h-10 ipad-horizontal:w-13 ipad-horizontal:h-13 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20";

  return renderIcon(className);
};
