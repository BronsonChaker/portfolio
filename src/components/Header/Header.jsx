import display_picture from "../../assets/images/display_picture.png";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="flex">
      <div className="w-[70%]">
        <h1 className="text-5xl font-medium text-headings">Bronson Chaker</h1>

        <p className="mt-4 text-lg text-gray-500 font-light">
          Recent graduate from Charles Sturt Univeristy looking for a Graduate
          or Intern Software Engineering position.
        </p>
      </div>

      <div className="flex items-center">
        <img
          src={display_picture}
          alt=""
          className="h-38 w-38 rounded-lg shadow-sm shadow-stone-300 border-2 border-stone-300"
        />
      </div>
    </div>
  );
}
