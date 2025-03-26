import Intro from "@/components/Intro";
import Posts from "./posts/page";
import Projects from "./projects/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <ContactPage />
      <Posts />
    </>
  );
}
