"use client";
import Image from "next/image";
import Link from "next/link";

function PortfolioPage() {
  return (
    <section id="portfolio">
      <div className="w-full flex">
        <div className="w-full text-white flex">
          <div className="m-8 flex text-center flex-col">
            <div className="flex mx-auto">
              <h1 className="text-3xl font-bold">
                Latest
                <span className="text-3xl font-bold text-[#0ef] mx-2">
                  Project
                </span>
              </h1>
            </div>
            <div className="mx-auto flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 mx-auto w-3/4">
                <Link
                  href="https://demo-euna.indrajohn.tech/"
                  className="border-white/40 border-2 rounded-lg p-1 shadow-lg"
                >
                  <Image
                    src="/img/portfolio/euna.png"
                    width={500}
                    height={500}
                    alt="Euna Italian Restaurant"
                  />
                </Link>

                <div className="border-white/40 border-2 rounded-lg p-1 shadow-lg">
                  <Image
                    src="/img/armada-orient.jpg"
                    width={500}
                    height={500}
                    alt="Armada Orient Furniture"
                  />
                </div>

                <div className="border-white/40 border-2 rounded-lg p-1 shadow-lg">
                  <Image
                    src="/img/portfolio3.jpg"
                    width={500}
                    height={500}
                    alt="Portfolio 3"
                  />
                </div>

                <div className="border-white/40 border-2 rounded-lg p-1 shadow-lg">
                  <Image
                    src="/img/portfolio4.jpg"
                    width={500}
                    height={500}
                    alt="Portfolio 4"
                  />
                </div>

                <div className="border-white/40 border-2 rounded-lg p-1 shadow-lg">
                  <Image
                    src="/img/portfolio5.jpg"
                    width={500}
                    height={500}
                    alt="Portfolio 5"
                  />
                </div>

                <div className="border-white/40 border-2 rounded-lg p-1  shadow-lg">
                  <Image
                    src="/img/portfolio6.jpg"
                    width={500}
                    height={500}
                    alt="Portfolio 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;
