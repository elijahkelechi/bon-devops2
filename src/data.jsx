import { nanoid } from "nanoid";
import { FaGlobe, FaMobileAlt, FaWordpress } from "react-icons/fa";
import mlbImage from "./assets/mlb.png";
import beautyImage from "./assets/beauty.png";
import gitech from "./assets/gitech.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#expertise", text: "expertise" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const expertise = [
  {
    id: nanoid(),
    title: "Modern Web Development",
    icon: <FaGlobe className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in creating visually engaging and fully responsive website, ensuring seamless user experiences through modern web development practices.",
  },

  {
    id: nanoid(),
    title: "Word Press",
    icon: <FaWordpress className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in building responsive and visually appealing WordPress sites, optimizing user experiences through custom themes, plugins, and modern development practices.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: `${mlbImage}`,
    url: "https://mlb.ng/",
    github: "https://github.com/john-smilga",
    title: "Business Registration/Digital Marketing Website",
    text: "This website is designed to provide seamless business registration services and digital marketing solutions. It offers a user-friendly interface where users can explore various registration packages, submit necessary documents, and access digital marketing services tailored to their business needs. The platform is optimized for speed and accessibility across all devices.",
  },

  {
    id: nanoid(),
    img: `${beautyImage}`,
    url: "https://beautytrendy.vercel.app/",
    github: "https://github.com/john-smilga",
    title: "E-commerce projects",
    text: "This e-commerce platform offers a seamless shopping experience where customers can easily browse products, add items to their cart, and securely complete their purchase in just a few clicks. The site is optimized for speed, ensuring fast loading times and a user-friendly interface for both desktop and mobile users",
  },
  {
    id: nanoid(),
    img: `${gitech}`,
    url: "https://giitech-solutions-drone-site.vercel.app/",
    github: "https://github.com/john-smilga",
    title: "Giitech Drones",
    text: "This is a landing page for a drone website, designed for easy accessibility and user friendly",
  },
  {
    id: nanoid(),
    img: "https://res.cloudinary.com/drg9uyqf9/image/upload/v1730812977/carousel-images/tmp-4-1730812976580_pptjqu.png",
    url: "https://sabi-ride.com.ng/",
    github: "https://github.com/john-smilga",
    title: "Sabi-Ride App",
    text: "Am opportuned to be the website developer of sabi-ride company website(an upcoming driving company), in this website I played my role as the front-end developer.",
  },
];
