import { MdEmail } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaFigma } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="w-full flex items-center flex-col text-center py-[64px] px-4">
      <div className="w-[343px] h-[344px] flex flex-col  gap-10">
        <div className="flex flex-col items-center gap-6">
          <div className="w-[122px] h-7 bg-gray-300 rounded-xl">
            Get in touch
          </div>
          <div>
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <MdEmail /> uzkhuthef@gmail.com{" "}
            <button>
              <FaCopy />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <FaPhoneFlip /> +976 958002** <FaCopy />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>You may also find me on these platforms!</div>
          <div className="flex justify-center gap-4">
            <FaGithub /> <CiTwitter /> <FaFigma />
          </div>
        </div>
      </div>
    </div>
  );
};
