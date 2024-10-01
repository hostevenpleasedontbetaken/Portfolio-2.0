import React, { useEffect, useState } from "react";
import { useGameMode } from "./GameModeContext";
import Theme from "./Theme";
import { contact, navigation } from "../constants";

const Header = () => {
  const { GameMode } = useGameMode();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-screen z-50
      }`}
    >
      <div className="px-2 pt-2 pb-1 sm:pb-2 max-w-13x1">
        <nav className="flex items-center justify-between mx-1 sm:mx-2 md:mx-3 lg:mx-4">
          <div className="flex items-center gap-2 px-3 py-2 border rounded-3xl h-[50px]">
            <Theme />
          </div>

          <div className="flex h-[50px] ml-20 ">
            <div className="flex items-center lg:border rounded-3xl lg:p-3 backdrop-blur-md">
              <ul className="hidden gap-5 text-base lg:flex lg:items-center text-white">
                {navigation.map((item) => (
                  <li
                    key={item.id}
                    className={`${
                      activeSection === item.id ? "text-main-1 font-bold" : ""
                    }`}
                  >
                    <a
                      className="flex items-center gap-1 transition-all hover:text-main-1"
                      href={`#${item.id}`} // Links to sections
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                      >
                        {item.svgPaths.map((path, index) => (
                          <path key={index} d={path}></path>
                        ))}
                      </svg>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex h-[50px]">
            <div className="flex items-center lg:border rounded-3xl">
              {contact.map((item) => (
                <a
                  key={item.link}
                  className="text-white hidden gap-5 text-base lg:flex lg:items-center pl-4 pt-3 hover:text-main-1"
                  href={item.link}
                  target={item.target}
                >
                  <svg width="35" height="35" viewBox="0 0 36 36" fill="none">
                    <path d={item.path} fill="currentColor"></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
