import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row items-center justify-center h-20">
      <div className=" px-3 py-1.5 flex flex-row items-center justify-center font-medium text-lg gap-5 overflow-visible">
        <Link to="https://www.linkedin.com/in/bronsonchaker/">
          <FaLinkedin className="text-4xl hover:opacity-80 hover:duration-300 hover:scale-115 overflow-visible" />
        </Link>
        <Link target="_blank" to="https://github.com/BronsonChaker">
          <FaGithub className="text-4xl hover:opacity-80 hover:duration-300 hover:scale-115 overflow-visible" />
        </Link>
      </div>
    </nav>
  );
}
