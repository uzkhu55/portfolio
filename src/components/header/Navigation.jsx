import { motion } from "framer-motion";
import { CiLight } from "react-icons/ci";

export const Navigation = ({ open }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };
  return (
    <motion.div
      initial="closed"
      animate={open ? "open" : "closed"}
      variants={variants}
      className="fixed top-9 z-1 right-0 bottom-0 w-full bg-white"
    >
      <div className="md:hidden  items-center flex flex-col gap-8 absolute  top-[50px] ">
        <div className="border border-l w-[420px] border-gray-300]" />
        <a href="">About</a>
        <a href="">Work</a>
        <a href="">Testimonias</a>
        <a href="">Contact</a>
        <div className="border border-l w-[420px] border-gray-300" />
        <div className="items-center gap-5 flex flex-col">
          <button className="w-full flex items-center justify-between">
            Switch Theme <CiLight />
          </button>
          <button className="bg-black w-[350px] h-[40px] rounded-lg text-white">
            Download CV
          </button>
        </div>
      </div>
    </motion.div>
  );
};
