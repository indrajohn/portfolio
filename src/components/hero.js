"use client";
import Image from "next/image";

function Hero() {
  return (
    <section id="home" data-aos="zoom-in" data-aos-duration="1500">
      <div className="w-full h-[calc(100vh-64px)] flex">
        <div className="w-full md:w-1/2 text-white flex">
          <div className="flex items-center h-full justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col">
              <h2
                className="text-xl font-bold"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                Hello, It&apos;s me
              </h2>
              <h1
                className="text-3xl font-bold"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                Yoseph Indra John Saputra
              </h1>
              <span
                className="mt-3"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                I have over 5 years+ of development experience, including
                working as a fullstack developer. I can build and consume APIs,
                set up databases, and love Node.js, WordPress, React.js.
              </span>
              <span className="flex text-[20px] mt-3">
                <a
                  className="border-2 border-[#0ef] rounded-full ease-in duration-300 hover:cursor-pointer p-1 mx-1 inline-flex justify-center hover:bg-[#90CAF9]"
                  href="https://www.facebook.com/indra.jhon.1"
                  target="_blank"
                  data-aos="fade-left"
                  data-aos-duration={`900`}
                >
                  <i className="bx bxl-facebook text-[#0ef]"></i>
                </a>
                <a
                  className="border-2 border-[#0ef] rounded-full ease-in duration-300 hover:cursor-pointer p-1 mx-1 inline-flex justify-center hover:bg-[#90CAF9]"
                  href="https://www.instagram.com/indrajohn92"
                  target="_blank"
                  data-aos="fade-left"
                  data-aos-duration={`1500`}
                >
                  <i className="bx bxl-instagram-alt text-[#0ef]"></i>
                </a>
                <a
                  className="border-2 border-[#0ef] rounded-full ease-in duration-300 hover:cursor-pointer p-1 mx-1 inline-flex justify-center hover:bg-[#90CAF9]"
                  href="https://www.linkedin.com/in/indrajohn/"
                  target="_blank"
                  data-aos="fade-left"
                  data-aos-duration={`2000`}
                >
                  <i className="bx bxl-linkedin text-[#0ef]"></i>
                </a>
              </span>
              <div className="my-6">
                <a
                  href="/yoseph_indra_john_saputra_cv_only.docx"
                  download
                  className="bg-[#0ef] rounded-lg text-[#1f242d] px-4 py-3 text-md font-bold"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-0 md:w-1/2 h-1/2">
          <div className="flex justify-center">
            <Image
              src="/img/photo_profile_transparent.png"
              width={500}
              priority
              height={500}
              className="animate-up-down"
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
