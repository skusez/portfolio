import { Link } from "react-router-dom";

const Studies = () => {
  return (
    <section
      id="studies"
      className="min-h-dvh px-4 flex flex-col items-center justify-center max-w-screen-2xl mx-auto w-full gap-8"
    >
      <h1 className="text-5xl font-bold text-center">My Studies</h1>
      <div className="flex flex-col items-center gap-4">
        <Link
          to="/reflections"
          className="text-xl font-semibold text-primary hover:underline"
        >
          Application Systems
        </Link>
      </div>
    </section>
  );
};

export default Studies;
