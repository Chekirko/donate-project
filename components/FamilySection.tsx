import Image from "next/image";
import React from "react";
import QuoteComponent from "./Quote";

const ChaplainSection = () => {
  return (
    <article className="mx-auto w-full max-w-2xl mb-12 px-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header className="mb-4 lg:mb-6 not-format">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          Служіння Підтримки Родин Загиблих Героїв
        </h1>
      </header>
      <h3 className="text-2xl font-semibold">Мета служіння</h3>
      <p className="lead">
        Духовна, емоційна та практична підтримка сімей військовослужбовців, які
        віддали життя за свободу України.
      </p>
      <h3 className="text-2xl font-semibold mt-4 mb-4">
        Основні напрямки діяльності:
      </h3>
      <ul className="flex flex-col gap-1">
        <li>Соціально-психологічна підтримка родин загиблих</li>
        <li>Надання матеріальної допомоги</li>
        <li>Забезпечення духовного супроводу та реабілітації</li>
        <li>Створення спільноти взаємної підтримки</li>
      </ul>
      <h3 className="text-2xl font-semibold mt-4 mb-4">Що ми робимо:</h3>
      <ul className="flex flex-col gap-1">
        <li>Періодично навідуємо родини і доставляємо продуктову допомогу</li>
        <li>Надаємо індивідуальне консультування та молитовну підтримку</li>
        <li>
          Проводимо зустрічі підтримки для членів родин загиблих захисників
        </li>
        <li>Допомагаємо у вирішенні соціально-побутових питань</li>
      </ul>
      <h3 className="text-2xl font-semibold mt-4 mb-4">
        Наше служіння базується на біблійному принципі:
      </h3>
      <QuoteComponent
        text=" Господь підпирає всіх падаючих, усіх зігнутих Він випростовує!"
        author="Пс. 144:14"
      />
      <h3 className="text-2xl text-blue-900 font-bold mt-12 mb-6">
        Ми віримо, що кожна родина героя гідна турботи, уваги та підтримки!
      </h3>
      <address className="flex items-center mb-6 not-italic border p-8 rounded-lg">
        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          <Image
            width={1200}
            height={1600}
            className="mr-4 size-32 rounded-full object-cover"
            src="/victor1.jpg"
            alt="Віктор Чекірко"
          />
          <div>
            <p className="text-xl font-bold text-blue-600 dark:text-white">
              Віктор Чекірко
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Відповідальний за служіння родинам загиблих воїнів
            </p>
          </div>
        </div>
      </address>
    </article>
  );
};

export default ChaplainSection;
