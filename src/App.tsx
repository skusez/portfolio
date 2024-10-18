import { Link } from "react-router-dom";
import { Layout } from "./layout";
import { useScrollIntoView } from "./hooks/useScrollIntoView";
import { FC, ReactNode, useEffect, useRef } from "react";
import Typed from "typed.js";
import { Route, Routes } from "react-router-dom";

import { QuoteIcon } from "@radix-ui/react-icons";
import Showcase from "./components/project-showcase";
import Studies from "./components/studies";
import Reflections from "./components/reflections";
import Reflection from "./components/reflection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="reflections" element={<Reflections />} />
        <Route path="reflection/:id" element={<Reflection />} />
      </Route>
    </Routes>
  );
}

const Home = () => (
  <>
    <Hero />
    <About />
    <Showcase />
    <Experience />
    <Skills />
    <Studies />
  </>
);

export default App;
const Hero = () => {
  const { scrollTo } = useScrollIntoView();
  const typeRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!typeRef.current) return;
    const typed = new Typed(typeRef.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Infra Engineer",
        "3D Web Creator",
        "UI/UX Designer",
        "Blockchain Developer",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      shuffle: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      id="home"
      className="h-[100dvh] pt-20 lg:flex-row max-h-dvh scrollbar-thin overflow-y-auto flex-col max-w-screen-2xl mx-auto flex  justify-between items-center w-full lg:gap-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-primary/20  to-background via-background"
    >
      <div className="lg:w-1/2 flex px-4 lg:text-left text-center items-center justify-center">
        <div className="w-max space-y-4">
          <div className="min-w-[380px] ">
            <h4 className="tracking-wide  text-2xl leading-loose">
              Looking for a web dev?
            </h4>
            <h4 className="tracking-wide  text-2xl leading-loose">
              Hi there 👋 I&apos;m
            </h4>
            <h1 className="text-8xl font-Rubik font-extrabold  text-primary text-wrap w-72 leading-none ">
              Jordan Skuse
            </h1>
          </div>
          <span
            ref={typeRef}
            className="font-semibold text-2xl leading-loose text-primary"
          />
          <div className="invisible lg:visible">
            <Link
              onClick={() => scrollTo("about")}
              to="#about"
              className="text-lg font-Rubik cursor-pointer select-none"
            >
              <span className="underline font-semibold">About Me</span>
              <span className="no-underline"> 👇</span>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-1/2 lg:h-full h-96  ">
        {/* looping video */}
        <video
          autoPlay
          loop
          poster="/interpersonal.png"
          muted
          preload="auto"
          className="object-scale-down h-full w-full"
          src="/memoji.mov"
        ></video>
      </div>
      <div className="visible h-full pb-12 flex items-center  lg:invisible">
        <Link
          onClick={() => scrollTo("about")}
          to="#about"
          className="text-4xl cursor-pointer select-none"
        >
          <span className="underline font-semibold">About Me</span>
          <span className="no-underline"> 👇</span>
        </Link>
      </div>
    </section>
  );
};

const About = () => {
  const { scrollTo } = useScrollIntoView();
  return (
    <section
      id="about"
      className="before:h-[100dvh] overflow-y-auto scrollbar-thin before:[w-screen] before:top-[100dvh] before:left-0 before:right-0 before:-z-10 before:absolute before:bg-gradient-to-tr before:from-primary/20 before:via-background before:to-background sm:flex-row h-[100dvh] px-4 flex-col max-w-screen-2xl mx-auto flex  justify-center py-20 w-full gap-8"
    >
      <div className="flex justify-between flex-col self-center h-full lg:text-lg text-base w-full">
        <div className="mx-auto w-fit  h-44">
          <h1 className="sm:text-4xl  text-2xl font-bold self-start leading-none text-foreground/70">
            Here&apos;s a little bit
          </h1>
          <div className="flex items-center justify-center">
            <div className="h-[5px] w-24 bg-primary"></div>
            <h1 className="sm:text-8xl font-Rubik text-6xl text-primary font-bold leading-none">
              About me
            </h1>
          </div>
        </div>
        <div className="w-full flex-col flex h-full items-center justify-center">
          <div className=" sm:block  flex  flex-col-reverse w-full sm:min-w-[600px] max-w-3xl space-y-4 justify-center items-center mx-auto text-justify ">
            <img
              src="/me.JPG"
              alt="Jordan Skuse"
              className="w-52 sm:w-72  sm:ml-4  aspect-square sm:float-end text-wrap object-cover rounded-full border-primary "
            />
            <div className="space-y-4">
              <p>
                I&apos;m passionate about creating beautiful, functional, and
                user-friendly software that makes people&apos;s lives easier.{" "}
                <span className="text-primary font-semibold">
                  I&apos;ve been developing since 2021
                </span>{" "}
                and have worked on a wide range of projects, from small websites
                to large-scale applications.{" "}
                <span className="text-primary font-semibold">
                  My strengths are in blockchain applications.
                </span>{" "}
              </p>
              <p className="pb-12 sm:pb-0">
                I created this ePortfolio to share my work and experience as a
                web developer. I intend to keep it up to date with my latest
                projects and skills.
              </p>
            </div>
          </div>
          <div className="flex max-w-3xl sm:flex-row flex-col gap-8 w-fit self-center">
            <Testimonial
              content={
                <>
                  Jordan posesses skills in lots of areas, it goes beyond just
                  making websites. His technical understanding of development is
                  impressive and I couldn&apos;t be happier with the product
                  he&apos;s created
                </>
              }
              author="Savely Lobanov"
              jobTitle="CEO, Web3Adventure"
            />
            <Testimonial
              content={
                <>
                  Jordan has been working for us for over a year now, and
                  we&apos;ve seen him grow into a fantasic developer. He&apos;s
                  passionate about his work, and always adapting to the
                  ever-changing DeFi landscape.
                </>
              }
              author="Frank Wang"
              jobTitle="CEO, Froopyland"
            />
          </div>
        </div>

        <Link
          onClick={() => scrollTo("projects")}
          to="#projects"
          className="text-4xl cursor-pointer select-none mx-auto"
        >
          <span className="underline font-Rubik font-semibold">
            Projects I have worked on
          </span>
          <span className="no-underline"> 👇</span>
        </Link>
      </div>
    </section>
  );
};

const Testimonial: FC<{
  content: ReactNode;
  author: string;
  jobTitle: string;
}> = ({ content, author, jobTitle }) => (
  <div className="mx-auto text-justify text-base space-y-2 max-w-96">
    <QuoteIcon className="lg:w-24 w-8 h-8 lg:h-24 mx-auto text-foreground/50" />
    <i className="opacity-80">{content}</i>
    <div className="text-center">
      <h4 className="text-lg font-semibold">{author}</h4>
      <h5 className="text-sm opacity-80 ">{jobTitle}</h5>
    </div>
  </div>
);

const Experience = () => {
  const { scrollTo } = useScrollIntoView();
  return (
    <section
      id="experience"
      className="before:h-[100dvh] flex-col max-h-dvh scrollbar-thin before:[w-screen] before:top-[200dvh] before:left-0 before:right-0 before:-z-10 before:absolute before:bg-gradient-to-br before:from-primary/20 before:via-background before:to-background  min-h-[100dvh] px-4 items-center  max-w-screen-2xl mx-auto flex  justify-between  pt-20 w-full gap-8"
    >
      {/* timeline */}

      <h1 className="sm:text-4xl pt-8 font-Rubik text-2xl font-bold leading-none text-foreground/70">
        <span className="text-primary ">My Journey</span> So Far
      </h1>
      <div className="overflow-y-auto scrollbar-thin scrollbar-track-muted-foreground scrollbar-thumb-primary  h-full max-h-full">
        <ol className="relative border-s ml-1.5  border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-background bg-primary"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Started learning web development
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-screen-sm">
              I began my web development journey DIY-style, watching YouTube
              tutorials and completing online courses through{" "}
              <a href="https://www.freecodecamp.org/" target="_blank">
                FreeCodeCamp
              </a>
              . I was recommended to start with HTML and CSS, then move onto
              Javascript. I then started learning React and Node.js.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-background bg-primary"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              November 2020
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              First project
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 max-w-screen-sm">
              I never skipped a day coding from the start of my learning
              journey. I shared some static websites I created while learning
              with my friend who needed a landing page for his business, and he
              was impressed enough to let me code it for him. The website
              featured an embedded YouTube video and a contact form that
              forwarded enquiries to a business email address. It was the
              perfect challenge for my skills at the time.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-background bg-primary"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              January 2021 - Current
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              First job as a developer
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 max-w-screen-sm">
              I introduced myself to a blockchain startup who were looking for a
              video creator to create marketing content. At the time, I was
              working for a media company filming and editing comedy sketches
              for social media. The interests crossed over perfectly, as I could
              create valuable work using the skills I was familiar with, while
              also getting to work with experience developers who would end up
              taking me under their wing. At the start of 2022 I transitioned to
              a junior developer role and I have been working for this company
              ever since.
            </p>
            <br />
            <ol className="list-disc  text-base font-normal text-gray-500 dark:text-gray-400 max-w-screen-sm">
              My responsibilities include:
              <li>Working with new team members</li>
              <li>Writing & Auditing Smart Contracts</li>
              <li>Building and managing databases</li>
              <li>Building and managing APIs</li>
              <li>Creating and maintaining CI/CD pipelines</li>
              <li>Implementing UI/UX designs</li>
              <li>Ensuring the security of applications</li>
            </ol>
          </li>
          <li className="ms-4 mt-8">
            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-background bg-primary"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              August 2021 - Current
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Freelance work
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 max-w-screen-sm">
              I had been working exclusively in the crypto space up until this
              point, and after a year of coding every day, I had built up a good
              network of contacts and I started to take on some freelance work.
              I've been working on a range of projects, from small NFT projects
              to large DeFi platforms, scaling in complexity as my skills
              improve.
            </p>
          </li>
          <li className="ms-4 mt-8">
            <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-background bg-primary"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              February 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Started University
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400 max-w-screen-sm">
              Although I have been working as a developer for a few years, I
              decided to go to university to get a degree in Cyber Security,
              majoring in Blockchain. Through my experiences I have primarily
              dealt with the Ethereum blockchain, and been responsible for
              writing smart contracts that generate millions of dollars in
              transaction volume. Ensuring the security of these programs is
              paramount, and the foundational knowledge I&apos;m learning in my
              Bachelor of Cyber Security is reenforcing my skillset and
              confidence in this area.
            </p>
          </li>
        </ol>
      </div>
      <Link
        onClick={() => scrollTo("skills")}
        to="#skills"
        className="text-4xl pb-8 cursor-pointer pt-4 select-none mx-auto"
      >
        <span className="underline font-Rubik font-semibold">My Skills</span>
        <span className="no-underline"> 👇</span>
      </Link>
    </section>
  );
};

const Skills = () => {
  const { scrollTo } = useScrollIntoView();
  const typeRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!typeRef.current) return;
    const typed = new Typed(typeRef.current, {
      strings: ["relationships", "software", "my skills"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 10000,
      shuffle: true,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <section
      id="skills"
      className="before:h-dvh  overflow-y-auto flex-col scrollbar-thin before:[w-screen] before:top-[300dvh] before:left-0 before:right-0 before:-z-10 before:absolute before:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] before:from-primary/20 before:via-background before:to-background  min-h-dvh h-dvh px-4 items-center  max-w-screen-2xl mx-auto flex gap-12 pt-20 w-full"
    >
      <h1 className="text-5xl font-bold text-center w-[500px]">
        I&apos;m building <br />
        <span
          className="text-primary  font-Rubik text-7xl"
          ref={typeRef}
        ></span>
        <br />
        everyday
      </h1>
      <div className="grid lg:grid-cols-3 max-h-full h-full overflow-hidden scrollbar-thin scrollbar-thumb-primary sm:grid-cols-2 gap-6">
        <Card3d
          content={
            <div className=" flex py-6 space-y-4 text-left flex-col w-full h-full ">
              {/* <p>Here are some examples I&apos;ve built:</p>
              <ol className="list-disc">
                <li>Business Homepages</li>
                <li>API Documentation</li>
                <li>Portfolio Websites</li>
                <li>Educational Content</li>
              </ol> */}
              <p>
                I write frontend apps using modern technologies that are easy to
                maintain and scale. Integrating a CMS allows my clients to
                easily update their website without knowing how to code.
              </p>
            </div>
          }
          image={
            <>
              <div className="absolute text-2xl lg:text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
                Frontend
              </div>
              <img
                className="h-full w-full p-8 rounded-xl object-contain bg-neutral-800 shadow-xl shadow-black/40"
                src="/react-typescript.png"
                alt=""
              />
            </>
          }
        />
        <Card3d
          content={
            <div className=" flex py-6 space-y-4 text-left flex-col w-full h-full ">
              <p>
                Backend apps are the backbone of any web application. It&apos;s
                important to have a solid foundation that can handle a large
                amount of traffic and data. I&apos;ve built RESTful APIs, SQL
                databases, user authentication systems and more.
              </p>
            </div>
          }
          image={
            <>
              <div className="absolute text-2xl lg:text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
                Backend
              </div>
              <img
                className="w-full p-20  aspect-square rounded-xl object-contain  bg-neutral-800 shadow-xl shadow-black/40"
                src="/database.png"
                alt=""
              />
            </>
          }
        />
        <Card3d
          content={
            <div className=" flex py-6 space-y-4 text-left flex-col w-full h-full ">
              <p>
                Blockchain apps are my specialty. Whether you&apos;re looking
                for a private ledger or want to create a DeFi application, I
                have the skillset and experience to bring your ideas to life.
              </p>
            </div>
          }
          image={
            <>
              <div className="absolute text-2xl lg:text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
                Blockchain
              </div>
              <img
                className="w-full p-24 aspect-square rounded-xl object-contain  bg-neutral-800 shadow-xl shadow-black/40"
                src="/ethereum.png"
                alt=""
              />
            </>
          }
        />
        <Card3d
          content={
            <div className=" flex py-6 space-y-4 text-left flex-col w-full h-full ">
              <p>
                Cloud computing is the future. By using cloud services, you can
                scale your application without worrying about infrastructure.{" "}
                <br /> As a certified AWS Solutions Architect, I can help you
                build or migrate to a secure, scalable, and cost-effective cloud
                infrastructure.
              </p>
            </div>
          }
          image={
            <>
              <div className="absolute  text-2xl lg:text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
                Cloud
              </div>
              <img
                className="w-full  aspect-square rounded-xl object-contain  bg-neutral-800 shadow-xl shadow-black/40"
                src="/clouds.png"
                alt=""
              />
            </>
          }
        />
        <Card3d
          content={
            <div className=" flex py-6 space-y-4 text-left flex-col w-full h-full ">
              <p>
                I believe interactive applications should be intuitive to use
                and have that native feeling. Coming from a background in
                videography, I have a keen eye for design and a passion for
                creating beautiful and functional user interfaces.
              </p>
            </div>
          }
          image={
            <>
              <div className="absolute text-2xl lg:text-2xl lg:text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
                UI/UX Design
              </div>
              <img
                className="w-full p-12 aspect-square rounded-xl object-contain  bg-neutral-800 shadow-xl shadow-black/40"
                src="/interpersonal.png"
                alt=""
              />
            </>
          }
        />
        <Card3d
          content={
            <div className=" flex py-4 space-y-4 text-left flex-col w-full h-full ">
              <p>
                3D web experiences are an amazing way to make your website stand
                out. I use Blender to create 3D models and animations, and then
                use Three.js to create interactive browser experiences. Whether
                you want a 3D product configurator, a virtual tour of your
                office, or a 3D game, I can help you create a unique and
                engaging experience for your users.
              </p>
            </div>
          }
          image={
            <>
              <div className="absolute text-2xl lg:text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
                3D
              </div>
              <img
                className="w-full p-8  aspect-square rounded-xl object-contain  bg-neutral-800 shadow-xl shadow-black/40"
                src="/blender.png"
                alt=""
              />
            </>
          }
        />
      </div>
      <Link
        onClick={() => scrollTo("studies")}
        to="#studies"
        className="text-4xl pb-8 cursor-pointer pt-4  select-none mx-auto"
      >
        <span className="underline font-Rubik font-semibold">My Studies</span>
        <span className="no-underline"> 👇</span>
      </Link>
    </section>
  );
};

type Card3dProps = {
  content: ReactNode;
  image: ReactNode;
};

const Card3d: FC<Card3dProps> = ({ image, content }) => (
  <div className="group lg:h-72 font-Rubik w-64 h-64  lg:w-72 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-sm shadow-primary transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* front of the card image */}
      <div className="absolute inset-0">{image}</div>
      {/* back of the card */}
      <div className="absolute overflow-y-auto inset-0 h-full w-full rounded-xl bg-black/80 px-4 backdrop-blur text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
        {content}{" "}
      </div>
    </div>
  </div>
);
