import { RxHome, RxPerson } from "react-icons/rx";
import { BiSolidBriefcase } from "react-icons/bi";
import { BsPencilSquare, BsEnvelopeOpenFill } from "react-icons/bs";
export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: BiSolidBriefcase,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: BsEnvelopeOpenFill,
    link: "/contact-me",
  },
  {
    name: "/blogs",
    icon: BsPencilSquare,
    link: "/blogs",
  },
];
