import display_picture from "../src/assets/images/display_picture.png";
import { Link } from "react-router";

export default function Header() {
  return (
    <div>
      <h1 className="text-5xl font-semibold">Bronson Chaker</h1>

      <p className="mt-4 text-lg text-gray-500 font-light">
        Recent graduate from Charles Sturt Univeristy looking for a Graduate or
        Intern Software Engineering position.
        <br></br>
        <br></br>
        <span className="mt-4">
          Currently working on{" "}
          <Link to="" className="text-blue-400 underline">
            @Blueprint
          </Link>
        </span>
      </p>

      <div className="flex items-center">
        <img
          src={display_picture}
          alt=""
          className="h-38 w-38 rounded-full shadow-sm shadow-stone-300 border-2 border-stone-300"
        />
      </div>
    </div>
  );
}
