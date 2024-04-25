export const useScrollIntoView = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  return { scrollTo };
};
