import React from "react";
import Donate from "./Donate";

const DonateSection = () => {
  return (
    <div className="flex flex-col mb-12 px-4 justify-center mx-auto">
      <h1
        id="donate"
        className="mb-8 text-3xl text-center font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white"
      >
        Пожертвувати
      </h1>
      <div className="flex justify-center">
        <div className="flex justify-around gap-6 flex-col md:flex-row ">
          <Donate
            title="Пожертвувати на капеланське служіння"
            cardNumber="4790 7299 3036 7453"
            phone="0966814127"
            name="Юрій"
          />
          <Donate
            title="Пожертвувати на служіння сім'ям героїв"
            cardNumber="4441 1111 4488 4362"
            phone="0634045298"
            name="Віктор"
          />
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
