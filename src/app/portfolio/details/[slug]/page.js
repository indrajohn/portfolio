"use client";

import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import PortfolioDetailsComponents from "@/components/portfolio-details";
import { useParams } from "next/navigation";

export default function PortfolioDetailsPage() {
  const params = useParams();
  return (
    <>
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-white "
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M20 12H4m0 0l6-6m-6 6l6 6"
          />
        </svg>
      </div>
      <PortfolioDetailsComponents slug={params.slug} />
    </>
  );
}
