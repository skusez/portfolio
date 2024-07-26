import { FC, ReactNode } from "react";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/theme-mode-toggle";
import { useScrollIntoView } from "./hooks/useScrollIntoView";
import { TooltipProvider } from "./components/ui/tooltip";
type Props = {
  children: ReactNode;
};
export const Layout: FC<Props> = ({ children }) => (
  <ThemeProvider defaultTheme="dark">
    <TooltipProvider>
      <Navbar />
      <main className="w-full  flex flex-col items-center">{children}</main>
    </TooltipProvider>
  </ThemeProvider>
);

const Navbar = () => {
  const { scrollTo } = useScrollIntoView();
  return (
    <nav className=" sticky -mb-20 z-50 top-0 inset-0 h-20 py-4 w-full  bg-background/80 backdrop-blur-lg flex justify-center  mx-auto px-4">
      <div className="flex justify-between max-w-screen-2xl  w-full items-center ">
        <div className="text-foreground rounded-xl  border-primary border-2 p-2">
          <img src="/logo.svg" className="w-12 h-6 rotate-[30deg]" alt="logo" />
        </div>
        <div className="flex items-center justify-center gap-4">
          <ModeToggle />
          <div className="flex space-x-4">
            <button
              onClick={() => scrollTo("home")}
              className="text-foreground"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="text-foreground"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("experience")}
              className="text-foreground"
            >
              Experience
            </button>
            <button
              onClick={() => scrollTo("skills")}
              className="text-foreground"
            >
              Skills
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
