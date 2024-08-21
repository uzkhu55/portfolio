export const AboutMe = () => {
  return (
    <div className="w-full flex md:justify-between  flex-col-reverse md:flex-row px-4 py-[64px]">
      <div className="flex flex-col justify-between gap-8 ">
        <div className="flex flex-col  gap-4">
          <div className="font-[900] text-4xl w-auto">HI I'm, UZKHU</div>
          <div className="md:text-xl md:font-[200] md:w-[800px]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </div>
        </div>
        <div>
          <div>Tokyo, Japan</div>
          <div>Not available</div>
        </div>
        <div className="flex flex-col items-start ">
          <a href="https://www.instagram.com/keisuke_ono/" target="blank">
            Instagram
          </a>
        </div>
      </div>

      <img
        className="h-[280px] w-[240px] mx-auto mb-8 "
        src="Propic.webp"
        alt=""
      />
    </div>
  );
};
