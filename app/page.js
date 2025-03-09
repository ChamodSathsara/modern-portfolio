import AboutMe from "@/components/AboutMe/AboutMe";
import CountingCard from "@/components/CountingCard/CountingCard";
import Hero from "@/components/Hero/Hero";
import MyProjects from "@/components/MyProjects/MyProjects";
import MyServices from "@/components/MyServices/MyServices";
import SendMessage from "@/components/SendMessage/SendMessage";

export default function Home() {
  return (
    <div>
      <Hero />
      <CountingCard />
      <AboutMe />
      <MyServices />
      <MyProjects />
      <SendMessage />
    </div>
  );
}
