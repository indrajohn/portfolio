import AboutMePage from "@/components/about-me";
import ContactPage from "@/components/contact";
import GoToTopButton from "@/components/go-to-top-button";
import Hero from "@/components/hero";
import PortfolioPage from "@/components/latest-project";
import MyServicesPage from "@/components/my-services";
import NavBar from "@/components/navbar";
import SkillPage from "@/components/skill";
export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMePage />
      <SkillPage />
      <MyServicesPage />
      <PortfolioPage />
      <ContactPage />
      <GoToTopButton />
    </>
  );
}
