import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row justify-center py-10">
      <div className="w-5/12 flex flex-row gap-10 font-medium text-lg">
        <NavLink to="/">home</NavLink>
        <NavLink to="/projects">projects</NavLink>
        <NavLink to="/resume">resume</NavLink>
        <NavLink to="/blog">blog</NavLink>
        <NavLink to="/email">email</NavLink>
      </div>
    </nav>
  );
}
