import under_development from "../assets/images/under_development.png";
import melior_screenshot from "../assets/images/melior_screenshot.png";
import yates_screenshot from "../assets/images/yates_screenshot.png";
import northend_screenshot from "../assets/images/northend_screenshot.png";

export const projectData = [
  {
    image: under_development,
    name: "Blueprint",
    website_link: "",
    github_frontend: "https://github.com/BronsonChaker/blueprint-web",
    github_backend: "https://github.com/BronsonChaker/blueprint-api",
    description:
      "Developing a full-stack project management application for construction that can be used by builders and individuals to enhance oparational efficiency of projects.",
    technologies: [
      "Django",
      "React",
      "TailwindCSS",
      "PostgreSQL",
      "AWS",
      "Stripe",
    ],
  },
  {
    image: melior_screenshot,
    name: "Melior",
    website_link: "melior.biz",
    github_frontend: "https://github.com/BronsonChaker/melior",
    github_backend: "",
    description:
      "Created a free online invoice generator which can be used by individuals and businesses to instantly download professionally templated invoices, no registration or subscription required.",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
  },
  {
    image: yates_screenshot,
    name: "Yates Roofing",
    website_link: "yatesroofing.net",
    github_frontend: "",
    github_backend: "",
    description:
      "Developed a website for a local roofing company to showcase worksmanship and services to potential customers",
    technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
  },
  {
    image: northend_screenshot,
    name: "Northend Boxing",
    website_link: "northendabc.net",
    github_frontend: "",
    github_backend: "",
    description:
      "Designed and developed a static website for a local boxing gym. Used by members for timetable and signup.",
    technologies: ["HTML", "CSS", "Netlify"],
  },
];
