import Image from "next/image";
import { format } from "date-fns";

const Footer = () => {
  return (
    <footer className=" mx-auto w-full z-40 bg-slate-500 flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex  justify-beetween gap-6">
          <Image
            src="/logo.png"
            alt="logo"
            width={120}
            height={120}
            className="object-contain"
          />
          <p
            className="text-base text-white
          "
          >
            Нове життя © {format(new Date(), "yyyy")}
            <br />
            Всі права захищено &copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
