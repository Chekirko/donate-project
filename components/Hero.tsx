import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col justify-between items-center max-lg:mt-24 lg:flex-row max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-2 ">
        <div className="mx-auto ">
          <h1 className="max-w-2xl mb-4 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Капеланське служіння церкви &quot;Нове життя&quot;
          </h1>
          <p className="max-w-2xl mb-2 font-light text-center text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Приєднуйся! Разом ми зможемо зробити набагато більше і наблизити
            перемогу!
          </p>
        </div>
        <div className="mx-auto">
          <Image
            src="/flag2.png"
            width={600}
            height={600}
            alt="mockup"
            className="max-lg:size-3/4 mx-auto max-md:size-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
