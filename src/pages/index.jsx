import { AboutMe, Header, Navigation, Intro, Skills } from "@/components";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="max-w-8xl flex flex-col items-center mx-auto ">
        <Header setOpen={setOpen} open={open} />
        <Navigation open={open} />
        <AboutMe />
        <Intro />
        <Skills />
      </div>
    </>
  );
}
``;
