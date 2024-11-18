import Image from "next/image";
import React from "react";
import QuoteComponent from "./Quote";

const ChaplainSection = () => {
  return (
    <article
      id="ministry"
      className="mx-auto w-full max-w-2xl mb-12 px-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"
    >
      <header className="mb-4 lg:mb-6 not-format">
        <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          Служіння Підтримки Військових
        </h1>
      </header>
      <h3 className="text-2xl font-semibold">Мета служіння</h3>
      <p className="lead">
        Духовна та матеріальна підтримка українських військовослужбовців під час
        воєнного стану, допомога захисникам та захисницям на передовій.
      </p>
      <h3 className="text-2xl font-semibold mt-4 mb-4">
        Основні напрямки діяльності:
      </h3>
      <ul className="flex flex-col gap-1">
        <li>Регулярні виїзди на східні території України</li>
        <li>Доставка життєво необхідних речей та технічного обладнання</li>
        <li>Духовна опіка та моральна підтримка воїнів</li>
        <li>
          Координація допомоги від різних громадських організацій та приватних
          осіб
        </li>
      </ul>
      <h3 className="text-2xl font-semibold mt-4 mb-4">Що ми робимо:</h3>
      <ul className="flex flex-col gap-1">
        <li>Відвідуємо військові підрозділи в зонах бойових дій</li>
        <li>
          Доставляємо військову форму, амуніцію, тактичне спорядження, технічне
          обладнання
        </li>
        <li>Забезпечуємо медичними препарати та аптечками</li>
        <li>Веземо продукти харчування, засоби гігієни, теплий одяг</li>
        <li>Надаємо духовну підтримку та молитовний супровід</li>
      </ul>
      <h3 className="text-2xl font-semibold mt-4 mb-4">
        Наше служіння базується на біблійному принципі:
      </h3>
      <QuoteComponent
        text="А роблячи добре, не знуджуймося, бо часу свого пожнемо, коли не ослабнемо"
        author="Гал. 6:9"
      />
      <h3 className="text-2xl text-blue-900 font-bold mt-12 mb-6">
        Ми віримо, що підтримка кожного воїна - це внесок у нашу спільну
        перемогу!
      </h3>
      <address className="flex items-center mb-6 not-italic border p-8 rounded-lg">
        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
          <Image
            width={1600}
            height={1600}
            className="mr-4 w-32 h-32 rounded-full"
            src="/george2.jpg"
            alt="Юрій Мартекляс"
          />
          <div>
            <p className="text-xl font-bold text-blue-600 dark:text-white">
              Юрій Мартекляс
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Відповідальний за капеланське служіння
            </p>
          </div>
        </div>
      </address>
    </article>
  );
};

export default ChaplainSection;
