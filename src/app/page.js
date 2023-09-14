import AboutMePage from "@/components/about-me";
import ContactPage from "@/components/contact";
import GoToTopButton from "@/components/go-to-top-button";
import Hero from "@/components/hero";
import PortfolioPage from "@/components/latest-project";
import MyServicesPage from "@/components/my-services";
import NavBar from "@/components/navbar";
import SkillPage from "@/components/skill";
import Timeline from "@/components/timeline";
import Script from "next/script";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />

      <AboutMePage />
      <Timeline />
      {/* <SkillPage /> */}
      {/* <MyServicesPage /> */}
      <PortfolioPage />

      <ContactPage />
      <GoToTopButton />
    </>
  );
}
