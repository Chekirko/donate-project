"use client";

import React, { useState } from "react";

interface DonateProps {
  title: string;
  cardNumber: string;
  phone: string;
  name: string;
}

const Donate = ({ title, cardNumber, phone, name }: DonateProps) => {
  const [copyStatus, setCopyStatus] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(cardNumber).then(() => {
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2000);
    });
  };
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-lg border border-green-500 shadow-md dark:bg-gray-800 p-6">
        <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">
            {`Телефон відповідального: ${phone} (${name})`}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {`Додати коментар "На служіння"`}
          </p>
          <div className="flex justify-between">
            {" "}
            <p className="font-medium text-primary-600 dark:text-primary-500">
              {cardNumber}
            </p>
            <button
              type="button"
              onClick={handleCopyToClipboard}
              className="p-4 text-sm bg-green-400 font-medium text-gray-500  rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              {copyStatus ? "Скопійовано!" : "Копіювати"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
