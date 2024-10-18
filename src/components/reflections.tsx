import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Reflections = () => {
  const reflections = [
    {
      id: "a",
      href: "/reflection/a",
      description: "Reflection on Application Systems Course",
    },
    {
      id: "b",
      href: "/reflection/b",
      description: "Reflection on Learning from Modules 1-3",
    },
    {
      id: "c",
      href: "/reflection/c",
      description: "Reflection on Learning from Modules 4-6",
    },
    {
      id: "d",
      href: "/reflection/d",
      description: "Reflection on Learning from Modules 7-8",
    },
  ];
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center">
          Reflections
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reflections.map((reflection) => (
            <Link
              key={reflection.id}
              to={reflection.href}
              className="block no-underline"
            >
              <Card className="h-full transition-shadow hover:shadow-lg hover:bg-muted transition duration-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Reflection {reflection.id.toUpperCase()}
                  </CardTitle>
                  <CardDescription>{reflection.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" asChild>
            <Link to="/">&larr; Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reflections;
