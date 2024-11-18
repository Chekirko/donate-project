import ChaplainSection from "@/components/ChaplainSection";
import FamilySection from "@/components/FamilySection";
import Hero from "@/components/Hero";
import { images } from "@/constants/images";
import Gallery from "@/components/Gallery";
import DonateSection from "@/components/DonateSection";

// import Image from "next/image";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex justify-center mb-8">
        <div className="h-1 px-8 bg-slate-300 w-3/4"></div>
      </div>
      <ChaplainSection />
      <div className="flex justify-center mb-8">
        <div className="h-1 px-8 bg-slate-300 w-3/4"></div>
      </div>
      <FamilySection />
      <div className="flex justify-center mb-8">
        <div className="h-1 px-8 bg-slate-300 w-3/4"></div>
      </div>
      <Gallery images={images} />
      <div className="flex justify-center mb-8">
        <div className="h-1 px-8 bg-slate-300 w-3/4"></div>
      </div>
      <DonateSection />
    </>
  );
}
