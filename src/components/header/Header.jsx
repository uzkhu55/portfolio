import { AiFillDatabase } from "react-icons/ai";
import { CiLight } from "react-icons/ci";
import { IoRemoveCircleOutline } from "react-icons/io5";

export const Header = ({ setOpen, open }) => {
  return (
    <div className="flex w-full justify-between items-center  md:py-8 px-4 md:px-8 h-[36px]">
      <span className="font-bold ">UZKHU</span>
      <div className="hidden md:flex gap-6">
        <a href="">About</a>
        <a href="">Work</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <div className="border border-l h-6 border-gray-300" />
        <div className="flex gap-x-1.5 items-center">
          <button>
            <CiLight />
          </button>
          <button>Download CV</button>
        </div>
      </div>
      {open === false ? (
        <AiFillDatabase
          className="block md:hidden"
          onClick={() => setOpen(true)}
        />
      ) : (
        <IoRemoveCircleOutline onClick={() => setOpen(false)} />
      )}
    </div>
  );
};
