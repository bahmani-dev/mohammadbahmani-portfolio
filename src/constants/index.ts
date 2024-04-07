import { AiFillHome } from "react-icons/ai";
import { BiSolidBriefcase } from "react-icons/bi";
import {
  BsPencilSquare,
  BsEnvelopeOpenFill,
  BsPersonFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaMap } from "react-icons/fa6";
import { HiMailOpen } from "react-icons/hi";
export const NavLinks = [
  {
    name: "/",
    icon: AiFillHome,
    link: "/",
  },
  {
    name: "/about",
    icon: BsPersonFill,
    link: "/about",
  },
  {
    name: "/my-portfolio",
    icon: BiSolidBriefcase,
    link: "/my-portfolio",
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

export const SkillData = [
  {
    name: "Html 5",
    Image: "/images/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/images/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/images/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/images/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/images/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/images/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/images/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/images/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/images/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: "/images/stripe.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/images/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/images/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Contacts = [
  {
    id: 1,
    name: "map",
    icon: FaMap,
    title: "Address point",
    text: "123 Stree New York City , United States Of America 750065.",
  },
  {
    id: 2,
    name: "phone",
    icon: BsFillTelephoneFill,
    title: "mail me",
    text: "steve@mail.com",
  },
  {
    id: 3,
    name: "mail",
    icon: HiMailOpen,
    title: "call me",
    text: "+216735783",
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "/images/linkedin.png",
  },
  {
    name: "Facebook",
    src: "/images/facebook.png",
  },
  {
    name: "Instagram",
    src: "/images/instagram.png",
  },
  {
    name: "Github",
    src: "/images/github.png",
  },
];
