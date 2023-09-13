import { useLayoutProvider } from "@/context/myContext";
import Image from "next/image";
import { useEffect, useState } from "react";

function PortfolioDetailsComponents({ slug }) {
  const { portfolioList } = useLayoutProvider();
  const [data, setData] = useState({});
  useEffect(() => {
    portfolioList.forEach((element) => {
      if (element.slug === slug) {
        setData(element);
      }
    });
  }, []);
  return (
    <section className="h-screen p-8">
      <div className="w-full flex">
        <div className="w-0 md:w-1/2 h-1/2">
          <div className="flex justify-center items-center">
            {data && (
              <Image
                src={data.img || ""}
                width={500}
                height={500}
                priority
                alt={data.alt || ""}
                className=""
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-1/2 text-white flex">
          <div className="flex items-center h-full justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            {data && (
              <div className="flex flex-col">
                <div className="flex ">
                  <h1 className="text-3xl font-bold">{data.name}</h1>
                </div>
                <span className="mt-3">{data.desc}</span>
                <span className="mt-3">{data.frontend}</span>
                <span className="mt-3">{data.backend}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioDetailsComponents;
