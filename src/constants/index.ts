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
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export const modes = [
  { name: "light", icon: BsFillSunFill },
  { name: "dark", icon: BsFillMoonStarsFill },
];
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
    name: "/portfolio",
    icon: BiSolidBriefcase,
    link: "/portfolio",
  },
  {
    name: "/contact",
    icon: BsEnvelopeOpenFill,
    link: "/contact",
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
  {
    name: "Postres",
    Image: "/images/postgres.png",
    width: 80,
    height: 80,
  },
  {
    name: "firebase",
    Image: "/images/firebase.png",
    width: 80,
    height: 80,
  },
  {
    name: "Flutter",
    Image: "/images/flutter.png",
    width: 80,
    height: 80,
  },
  {
    name: "Vuejs",
    Image: "/images/vue.png",
    width: 80,
    height: 80,
  },
  {
    name: "Python",
    Image: "/images/python.png",
    width: 80,
    height: 80,
  },
  {
    name: "Php",
    Image: "/images/php.png",
    width: 80,
    height: 80,
  },
  {
    name: "Laravel",
    Image: "/images/laravel.png",
    width: 80,
    height: 80,
  },
  {
    name: "Inertiajs",
    Image: "/images/inertia.png",
    width: 80,
    height: 80,
  },
];

export const Contacts = [
  {
    id: 1,
    name: "map",
    icon: FaMap,
    title: "Address point",
    text: "Lane 3, Shahr-e-Naw, Kabul, Afghanistan.",
  },
  {
    id: 2,
    name: "phone",
    icon: HiMailOpen,
    title: "mail me",
    text: "mohammadmandegar2019@gmail.com",
  },
  {
    id: 3,
    name: "mail",
    icon: BsFillTelephoneFill,
    title: "call me",
    text: "+93778890838",
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "/images/linkedin.png",
    link: "https://linkedin.com/in/mohammadbahmani",
  },
  {
    name: "Facebook",
    src: "/images/facebook.png",
    link: "https://facebook.com/mohammadbahmani.dev",
  },
  {
    name: "Instagram",
    src: "/images/instagram.png",
    link: "https://instagram.com/mohammadbahmani.dev",
  },
  {
    name: "Github",
    src: "/images/github.png",
    link: "https://github.com/mohammadbahmani-dev",
  },
];
