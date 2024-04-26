import { Link } from "react-router-dom";
import { Layout } from "./layout";
import { useScrollIntoView } from "./hooks/useScrollIntoView";
import { FC, ReactNode, useEffect, useRef } from "react";
import Typed from "typed.js";
import { QuoteIcon } from "@radix-ui/react-icons";
function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Skills />
    </Layout>
  );
}

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
        "Professional Nerd",
        "Infra Engineer",
        "3D Web Creator",
        "Coffee Lover",
        "UI/UX Designer",
        "Blockchain Developer",
        "Open Source Contributor",
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
          <div>
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
      <div className=" w-full lg:w-1/2 lg:h-full  ">
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
      <div className="flex justify-between flex-col self-center h-full text-lg w-full">
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
              I created this ePortfolio to showcase some of my favorite work and
              to give you a sense of who I am as a developer. If you&apos;d like
              to work together, please feel free to{" "}
              <button
                className="underline font-semibold"
                onClick={() => scrollTo("contact")}
              >
                contact me
              </button>
              .
            </p>
          </div>
        </div>
        <div className="flex max-w-3xl sm:flex-row flex-col gap-8 w-fit self-center">
          <Testimonial
            content={
              <>
                Jordan posesses skills in every area, it goes beyond just making
                websites. His technical understanding of development is
                incredible and I couldn&apos;t be happier with the product
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
            author="Cameron Breen"
            jobTitle="CEO, Froopyland"
          />
        </div>
        <Link
          onClick={() => scrollTo("experience")}
          to="#experience"
          className="text-xl cursor-pointer select-none mx-auto"
        >
          <span className="underline font-Rubik font-semibold">
            Education & Experience
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
    <QuoteIcon className="sm:w-24 w-12 h-12 sm:h-24 mx-auto text-foreground/50" />
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
      className="before:h-[100dvh] overflow-y-auto flex-col scrollbar-thin before:[w-screen] before:top-[200dvh] before:left-0 before:right-0 before:-z-10 before:absolute before:bg-gradient-to-br before:from-primary/20 before:via-background before:to-background  min-h-[100dvh] px-4 items-center  max-w-screen-2xl mx-auto flex  justify-center  py-20 w-full gap-8"
    >
      {/* timeline */}
      <div>
        <h1 className="sm:text-4xl font-Rubik text-2xl font-bold leading-none text-foreground/70">
          <span className="text-primary ">My Journey</span> So Far
        </h1>
      </div>

      <ol className="relative border-s ml-1.5 max-h-dvh border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border  border-background bg-primary"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            August 2020
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Started learning web development
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-screen-sm">
            I started learning self taught, watching YouTube tutorials and a
            platform called FreeCodeCamp. I was recommended to start with HTML
            and CSS, then move onto Javascript. I then started learning React
            and Node.js.
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
            I told all my friends and family that I was learning how to program,
            and I was lucky enough that one of my friends needed a simple
            website for his business. I built him a website using HTML, CSS and
            Javascript, and later rewrote it in React. It was the perfect
            challenge for me at the time.
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
            Through the friend I built the website for, I was introduced to a
            startup that was looking for a junior developer. Although I was
            still working on my programming skills, I had other skills that they
            were looking for, and they were willing to train me up. I&apos;ve
            been working there ever since.
          </p>
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
            From the start of my journey, I had been working exlusively in the
            crypto space After a year of coding every day, I had built up a good
            network of contacts and I started to take on freelance work.
            I&apos;ve been working on a range of projects, from small NFT
            projects to large DeFi platforms.
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
            dealt with the Ethereum blockchain, and been responsible for writing
            smart contracts that generate millions of dollars in transaction
            volume. Ensuring the security of these programs is paramount, and
            the foundational knowledge I&apos;m learning in my Bachelor of Cyber
            Security is reenforcing my skillset and confidence in this area.
          </p>
        </li>
      </ol>
      <Link
        onClick={() => scrollTo("skills")}
        to="#skills"
        className="text-xl cursor-pointer pt-4 select-none mx-auto"
      >
        <span className="underline font-Rubik font-semibold">My Skills</span>
        <span className="no-underline"> 👇</span>
      </Link>
    </section>
  );
};

const Skills = () => {
  // const { scrollTo } = useScrollIntoView();
  return (
    <section
      id="skills"
      className="before:h-[100dvh] overflow-y-auto flex-col scrollbar-thin before:[w-screen] before:top-[200dvh] before:left-0 before:right-0 before:-z-10 before:absolute before:bg-gradient-to-br before:from-primary/20 before:via-background before:to-background  min-h-[100dvh] px-4 items-center  max-w-screen-2xl mx-auto flex  justify-center  py-20 w-full gap-8"
    >
      <div className="grid grid-cols-3 gap-6">
        <Card3d
          content={
            <div className=" flex py-6 space-y-4 text-left flex-col w-full h-full ">
              <p>Here are some examples I&apos;ve built:</p>
              <ol className="list-disc">
                <li>Business Homepages</li>
                <li>API Documentation</li>
                <li>Portfolio Websites</li>
                <li>Educational Content</li>
              </ol>
              <p>
                I write frontend apps using modern technologies that are easy to
                maintain and scale. Integrating a CMS allows my clients to
                easily update their website without knowing how to code.
              </p>
            </div>
          }
          image={
            <>
              <div className="absolute text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
                Frontend
              </div>
              <img
                className="h-full w-full rounded-xl object-contain bg-neutral-800 shadow-xl shadow-black/40"
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
              <div className="absolute text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
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
              <div className="absolute text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
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
              <div className="absolute  text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
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
                When working with clients, I always make sure to understand
                their needs and goals. I&apos;m a great listener and
                communicator, and I&apos;m always looking for ways to improve my
                skills and knowledge. I&apos;m also a team player and enjoy
                collaborating with others to achieve a common goal.
              </p>
            </div>
          }
          image={
            <>
              <div className="absolute text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
                Interpersonal
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
            <div className=" flex py-6 space-y-4 text-left flex-col w-full h-full ">
              <p>
                3D web experiences are an amazing way to impress your audience
                and make your website stand out. I use Blender to create 3D
                models and animations, and then use Three.js to render them in
                the browser. Whether you want a 3D product configurator, a
                virtual tour of your office, or a 3D game, I can help you create
                a unique and engaging experience for your users.
              </p>
            </div>
          }
          image={
            <>
              <div className="absolute text-4xl font-bold w-full h-full  flex justify-center pt-8 overflow-hidden mx-auto inset-0">
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
    </section>
  );
};

type Card3dProps = {
  content: ReactNode;
  image: ReactNode;
};

const Card3d: FC<Card3dProps> = ({ image, content }) => (
  <div className="group h-96 font-Rubik w-96 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-sm shadow-primary transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      {/* front of the card image */}
      <div className="absolute inset-0">{image}</div>
      {/* back of the card */}
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 backdrop-blur text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
        {content}{" "}
      </div>
    </div>
  </div>
);
