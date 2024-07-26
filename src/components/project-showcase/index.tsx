import * as React from "react";
import { Link } from "react-router-dom";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ExpandedState,
  getExpandedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  LockClosedIcon,
  DiscordLogoIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import {
  SiBun,
  SiEthereum,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiResend,
  SiShadcnui,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { PiEnvelopeSimpleOpen } from "react-icons/pi";
import { TbAccessible, TbServer } from "react-icons/tb";
import { GrPowerCycle, GrServer } from "react-icons/gr";
import { RiGovernmentLine } from "react-icons/ri";
import { FaHandPointUp } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Separator } from "../ui/separator";
import { useScrollIntoView } from "@/hooks/useScrollIntoView";
interface Project {
  title: string;
  avatar: string;
  description: string;
  features: { title: string; icon: React.ReactNode }[];
  techStack: { title: string; icon: React.ReactNode }[];
  status: "live" | "in development" | "Testing";
  visitUrl: string;
  previewImages: string[];
}

const status: Record<Project["status"], React.ReactNode> = {
  "in development": (
    <Badge variant="destructive" className="text-xs">
      In Development
    </Badge>
  ),
  live: (
    <Badge variant="default" className="text-xs">
      Live
    </Badge>
  ),
  Testing: <Badge className="text-xs bg-pink-400">Testing</Badge>,
};

const projects: Project[] = [
  {
    title: "Web3Adventure",
    avatar: "/showcase/web3adventure/logo.jpg",
    description:
      "A web3 raffle SaaS platform that allows users to create and participate in raffles. Webhooks setup on various database tables that sends new data to the website backend and discord bot. Web3Adventure is an ambitious project that has a complex event driven design and is intended to be an Alphabot competitor. I am the solo developer on this project and have built out the entire platform from scratch!",
    features: [
      { title: "Role Based Auth", icon: <LockClosedIcon /> },
      { title: "Discord Bot Integration", icon: <DiscordLogoIcon /> },
      { title: "Event Driven Architecture", icon: <GrPowerCycle /> },
      { title: "Email Newsletter", icon: <PiEnvelopeSimpleOpen /> },
      { title: "Fully Accessible", icon: <TbAccessible /> },
      { title: "Self hostable", icon: <TbServer /> },
    ],
    techStack: [
      {
        title: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        title: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        title: "Redis",
        icon: <SiRedis />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss />,
      },
      {
        title: "Shadcn-ui",
        icon: <SiShadcnui />,
      },
      {
        title: "Resend.io",
        icon: <SiResend />,
      },
      {
        title: "Vercel",
        icon: <SiVercel />,
      },
    ],
    status: "Testing",
    visitUrl: "https://web3adventure.vercel.app",
    previewImages: [
      "/showcase/web3adventure/2.png",
      "/showcase/web3adventure/1.png",
    ],
  },
  {
    title: "Pixelmesh",
    avatar: "/showcase/pixelmesh/logo.jpg",
    description:
      "An NFT Automated Market Maker (AMM) DeFi platform that offers greater pricing for NFTs. Pixelmesh is a project that I am working on with a small team of developers. I have been responsible for designing the projects architecture, building the backend and I have contributed to the smart contract development and building out the frontend. I have been responsible for the platforms development and design decisions.",
    features: [
      { title: "Blockchain Integration", icon: <SiEthereum /> },
      { title: "Event Driven Architecture", icon: <GrPowerCycle /> },
      { title: "Decentralized", icon: <RiGovernmentLine /> },
      { title: "Self hosted", icon: <GrServer /> },
    ],
    techStack: [
      {
        title: "Vite.js",
        icon: <SiVite />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        title: "PostgreSQL",
        icon: <SiPostgresql />,
      },
      {
        title: "Redis",
        icon: <SiRedis />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss />,
      },
      {
        title: "Bun",
        icon: <SiBun />,
      },
      {
        title: "Ethereum",
        icon: <SiEthereum />,
      },
    ],
    status: "Testing",
    visitUrl: "https://pixelmesh.xyz",
    previewImages: ["/showcase/pixelmesh/2.png", "/showcase/pixelmesh/1.png"],
  },
  {
    title: "Thicc86 (3D Website)",
    avatar: "/showcase/thiccclub/logo.jpg",
    description:
      "Thicc86 is a car owned by a friend of mine. I built him a landing page to showcase his car and tease at an NFT project (back when everyone wanted NFTs). The 3D scene was made in Blender and features a baked texture map, interactive elements and very lightweight 3D models. The scene was imported to the browser using Three.js + React Three Fiber.",
    features: [
      { title: "3D", icon: <SiThreedotjs /> },
      { title: "Interactive", icon: <FaHandPointUp /> },
    ],
    techStack: [
      {
        title: "Vite.js",
        icon: <SiVite />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss />,
      },
      {
        title: "Three.js",
        icon: <SiThreedotjs />,
      },
    ],
    status: "live",
    visitUrl: "https://thiccclub3d.vercel.app/",
    previewImages: ["/showcase/thiccclub/1.png", "/showcase/thiccclub/2.png"],
  },
  {
    title: "Portfolio",
    avatar: "/logo.svg",
    description:
      "What you are looking at! My portfolio is a showcase of my work and skills. I built this website over a weekend, and I update it whenever I have a new project to showcase. It is self hosted and built with Vite.js + React + TailwindCSS. The 3D avatar is straight out of memoji and I did in fact spend too long getting the right loop.",
    features: [],
    techStack: [
      {
        title: "Vite.js",
        icon: <SiVite />,
      },
      {
        title: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        title: "TailwindCSS",
        icon: <SiTailwindcss />,
      },
      {
        title: "Shadcn-ui",
        icon: <SiShadcnui />,
      },
    ],
    status: "live",
    visitUrl: "https://web3adventure.vercel.app",
    previewImages: ["/showcase/portfolio/1.png"],
  },
  // Add more projects here...
];

const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: "Project",
    cell: ({ row }) => (
      <div className="flex items-center  space-x-4">
        <img
          src={
            row.original.avatar
              ? row.original.avatar
              : "/showcase/default-avatar.png"
          }
          alt={row.original.title}
          className="w-12 h-12 rounded-md"
        />
        <div>
          <Button
            asChild
            variant={"link"}
            className="font-semibold text-default underline"
          >
            <a href={row.original.visitUrl}>{row.original.title}</a>
          </Button>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => status[row.original.status],
  },
  {
    accessorKey: "techStack",
    header: "Tech Stack",
    cell: ({ row }) => (
      <div className="inline-flex gap-1">
        {row.original.techStack.map((tech, index) => (
          <React.Fragment key={index}>
            <Tooltip>
              <TooltipTrigger>{tech.icon}</TooltipTrigger>
              <TooltipContent>{tech.title}</TooltipContent>
            </Tooltip>
          </React.Fragment>
        ))}
      </div>
    ),
  },

  {
    id: "expand",
    cell: ({ row }) => (
      <Button variant="ghost" size="sm" onClick={() => row.toggleExpanded()}>
        {row.getIsExpanded() ? (
          <>
            Less
            <ChevronDownIcon />
          </>
        ) : (
          <>
            More
            <ChevronRightIcon />
          </>
        )}
      </Button>
    ),
  },
];

export const Showcase = () => {
  const [expanded, setExpanded] = React.useState<ExpandedState>({});
  const { scrollTo } = useScrollIntoView();
  const table = useReactTable({
    data: projects,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <div
      id="projects"
      className="h-[100dvh] w-full flex pt-20 max-h-dvh scrollbar-thin overflow-y-auto flex-col max-w-screen-2xl mx-auto px-4"
    >
      <div className="flex-1">
        <div className="py-4">
          <h2 className="text-4xl font-Rubik font-semibold">
            What <span className="text-primary">I have been working</span> on
          </h2>
          (Click more to see more details)
        </div>
        <Card className="w-full ">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <Table className="">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <React.Fragment key={row.id}>
                      <TableRow data-state={row.getIsSelected() && "selected"}>
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                      {row.getIsExpanded() && (
                        <TableRow>
                          <TableCell colSpan={columns.length}>
                            <div className="flex-col flex gap-2">
                              <div className="flex   gap-4 p-4">
                                <div className="flex-1">
                                  <h3 className="font-semibold mb-2">
                                    Description
                                  </h3>
                                  <p>{row.original.description}</p>
                                </div>
                                <div className="">
                                  <h3 className="font-semibold mb-2">
                                    Preview
                                  </h3>
                                  <Carousel className="w-full max-w-xs ">
                                    <CarouselContent>
                                      {row.original.previewImages.map(
                                        (image, index) => (
                                          <CarouselItem key={index}>
                                            <img
                                              src={image}
                                              alt={`${row.original.title} preview ${index + 1}`}
                                              className="w-full h-auto rounded-md"
                                            />
                                          </CarouselItem>
                                        )
                                      )}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-2" />
                                    <CarouselNext className="right-2" />
                                  </Carousel>
                                </div>
                              </div>
                              <Separator />
                              <div className="gap-4 p-4">
                                <h3 className="font-semibold mb-2">Features</h3>
                                <ul className="space-y-1">
                                  {row.original.features.map(
                                    (feature, index) => (
                                      <li
                                        key={index}
                                        className="flex items-center space-x-2"
                                      >
                                        {feature.icon}
                                        <span>{feature.title}</span>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <div className="py-4 text-xs max-w-xs ">
          <p>
            * These are just a small selection of the projects I have worked on,
            there are too many Web3 SPA minting dapps to count!
          </p>
        </div>
      </div>
      <Link
        onClick={() => scrollTo("experience")}
        to="#experience"
        className="text-4xl flex w-full justify-center py-4 cursor-pointer select-none mx-auto"
      >
        <span className="underline font-Rubik font-semibold">
          Education & Experience
        </span>
        <span className="no-underline"> 👇</span>
      </Link>
    </div>
  );
};

export default Showcase;
