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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9PM69CL8XL" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-9PM69CL8XL');
        `}
      </Script>
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
