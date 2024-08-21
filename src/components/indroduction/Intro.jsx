export const Intro = () => {
  return (
    <div className=" flex-col  md:gap-20   justify-between items-center gap-4 bg-gray-200 flex py-[64px] px-[16px] w-full ">
      <div>About me</div>
      <div className="flex flex-col md:gap-[400px] md:px-[22px] gap-12 md:flex-row  ">
        <img
          className="h-[360px] w-[280px] md:w-[300px] md:h-[480px] md:mx-auto mx-auto mb-5 "
          src="Propic.webp"
          alt=""
        />
        <div className="flex flex-col gap-6 md:w-[600px] ">
          <div className="font-[700] text-3xl">
            Curious about me? Here you have it:
          </div>
          <div className="flex flex-col gap-4">
            <div>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </div>
            <div className="flex gap-4">
              <div>
                <li>Computer Engineering</li>
                <li>Full time freelancer</li>
              </div>
              <div>
                <li>Avid learner</li>
                <li>Aspiring indie hacker</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
