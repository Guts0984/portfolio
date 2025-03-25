import Intro from "@/components/Intro";
import Posts from "./posts/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <Posts />
    </>
  );
}
