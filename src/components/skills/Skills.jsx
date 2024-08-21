export const Skills = () => {
  const techStack = [
    { image: "/icon-javscript.png", name: "Javascript" },
    { image: "/icon-typescript.png", name: "Javascript" },
    { image: "/Group.png", name: "Javascript" },
    { image: "/icon-nextjs.png", name: "Javascript" },
    { image: "/icon-nodejs.png", name: "Javascript" },
    { image: "/icon-express.png", name: "Javascript" },
    { image: "/icon-nextjs.png", name: "Javascript" },
    { image: "/icon-socket.png", name: "Javascript" },
    { image: "/icon-postgresql.png", name: "Javascript" },
    { image: "/icon-mongodb.png", name: "Javascript" },
    { image: "/icon-sass.png", name: "Javascript" },
    { image: "/tailwind.png", name: "Javascript" },
    { image: "/icon-figma.png", name: "Javascript" },
    { image: "/icon-cypress.png", name: "Javascript" },
    { image: "/icon-storybook.png", name: "Javascript" },
    { image: "/icon-git.png", name: "Javascript" },
  ];

  return (
    <div className="py-[64px] md:py-[80px] md:h-[600px] px-4 flex flex-col items-center gap-6">
      <div className="w-[343px] items-center s flex flex-col gap-4">
        <div className="rounded-2xl  bg-gray-400 w-[75px] flex justify-center py-1 px-5">
          Skills
        </div>
        <div className="text-center">
          The skills, tools and technologies I am really good at
        </div>
      </div>
      <div className="flex gap-12 flex-wrap justify-between  md:gap-[82px]">
        {techStack.map(({ image, name }, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 md:h-[108px] md:w-[88px]"
          >
            <img className="h-16" src={image} alt="" />
            <h4>{name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
