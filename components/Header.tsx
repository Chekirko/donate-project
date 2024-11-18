"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavItem {
  href: string;
  label: string;
}
const Header = () => {
  const navItems: NavItem[] = [
    { href: "#ministry", label: "Служіння" },
    { href: "#gallery", label: "Фото" },
    { href: "#donate", label: "Пожертвувати" },
  ];

  const handleScrollToSection = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed left-0 top-0 w-full z-40 bg-slate-500 dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-6">
        <nav className="flex flex-col md:flex-row gap-4 md:justify-between items-center py-2.5">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              className=""
              alt="Logo"
              width={120}
              height={120}
            />
          </Link>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  scroll={false}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="text-white font-bold hover:text-blue-300 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
