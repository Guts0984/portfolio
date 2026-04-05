import Intro from "@/components/Intro";
import ContactSection from "@/components/ContactSection";
import ProjectsSection from "@/components/ProjectsSection";
import PostsSection from "@/components/PostsSection";

export default function Home() {
  return (
    <>
      <Intro />
      <ProjectsSection />
      <ContactSection />
      <PostsSection />
    </>
  );
}
