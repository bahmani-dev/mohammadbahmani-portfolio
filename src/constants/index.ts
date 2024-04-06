import { AiFillHome } from "react-icons/ai";
import { BiSolidBriefcase } from "react-icons/bi";
import {
  BsPencilSquare,
  BsEnvelopeOpenFill,
  BsPersonFill,
} from "react-icons/bs";
export const NavLinks = [
  {
    name: "/",
    icon: AiFillHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: BsPersonFill,
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
