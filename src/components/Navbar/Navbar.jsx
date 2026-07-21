import { Link } from "react-router";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row items-center justify-center h-24">
      <div className=" border px-2 py-2 flex flex-row items-center justify-center font-medium text-lg gap-5 hover:px-6 ease-in-out hover:duration-300 hover:cursor-pointer rounded-2xl border-gray-300">
        <div className="relative group hover:px-2 hover:duration-500 ease-linear">
          <Link
            to="https://www.linkedin.com/in/bronsonchaker/"
            className="hover:px-2 hover:duration-300"
          >
            <FaLinkedin className="text-4xl hover:opacity-80 hover:duration-300 hover:scale-115 overflow-visible rounded-full p-2 hover:bg-gray-100 hover:px-2" />
          </Link>
          <p
            className="absolute bottom-full left-1/2 
                       transform -translate-x-1/2 mb-0.5 
                       w-max px-2 py-0.5 text-sm text-white
                       bg-gray-700 rounded shadow-lg 
                       opacity-0 group-hover:opacity-100"
          >
            LinkedIn
          </p>
        </div>

        <div className="relative group hover:px-2 hover:duration-500 ease-out">
          <Link
            target="_blank"
            to="https://github.com/BronsonChaker"
            className="hover:px-2 hover:duration-300"
          >
            <FaGithub className="text-4xl hover:opacity-80 hover:duration-300 hover:scale-115 overflow-visible rounded-full p-2 hover:bg-gray-100 hover:px-2" />
          </Link>
          <p
            className="absolute bottom-full left-1/2 
                       transform -translate-x-1/2 mb-0.5 
                       w-max px-2 py-0.5 text-sm text-white
                       bg-gray-700 rounded shadow-lg 
                       opacity-0 group-hover:opacity-100"
          >
            GitHub
          </p>
        </div>

        <div className="relative group hover:px-2 hover:duration-500 ease-linear">
          <Link target="_blank" to="" className="hover:px-2 hover:duration-300">
            <MdOutlineEmail className="text-4xl hover:opacity-80 hover:duration-300 hover:scale-115 overflow-visible rounded-full p-2 hover:bg-gray-100 " />
          </Link>
          <p
            className="absolute bottom-full left-1/2 
                       transform -translate-x-1/2 mb-0.5 
                       w-max px-2 py-0.5 text-sm text-white
                       bg-gray-700 rounded shadow-lg 
                       opacity-0 group-hover:opacity-100"
          >
            Email
          </p>
        </div>
      </div>
    </nav>
  );
}
