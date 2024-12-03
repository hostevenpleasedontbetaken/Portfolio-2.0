import React, { useState, useEffect } from "react";
import Section from "./Section";

const Techstack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("techstack");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log(isVisible);
        }
      },
      { threshold: 0.1 } // Trigger animation when 20% of the section is visible
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <Section padding="small" id="techstack">
      <div className="flex-col px-20 text-white space-y-4 ">
        <div
          className={`flex justify-start items-center transition-all duration-1000 ease-in-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[-5rem] opacity-0"
          }`}
        >
          <p className={`text-[3rem] `}>Current Technologies</p>
        </div>
        <div
          className={`transition-transform duration-1000 ease-in-out ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-[-5rem] opacity-0"
          }`}
        >
          <p className="md:max-w-3xl text-sm text-mac-4 min-[430px]:text-base max-w-lg">
            I specialize in a variety of modern technologies that enable me to
            create powerful and efficient solutions. Here are some of my core
            tools and skills.
          </p>
        </div>
        <div
          className={`grid grid-cols-1 grid-rows-12 sm:grid-rows-6 lg:grid-rows-3 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 transition-transform duration-1000 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[10rem] opacity-0"
          }`}
        >
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#0485A9]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/react-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">React</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">
                JavaScript Library
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#751E20]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/angular-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">Angular</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">
                Frontend Framework
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#A92E1C]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/git-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">Git</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">Version Control</p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#035B6A]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/tailwind-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">Tailwind</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">CSS Framework</p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#008A57]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/nodejs-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">Node.js</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">
                JavaScript Runtime
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#005792]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/typescript-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">TypeScript</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">
                Typed JavaScript
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#D3B912]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/javascript-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">JavaScript</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">
                Scripting Language
              </p>
            </div>
          </div>

          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#A83516]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/html-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">HTML</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">Markup Language</p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#104F73]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/css-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">CSS</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">
                Styling Language
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#56289B]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/csharp-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">C#</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">
                Programming Language
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#345B80]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/c++-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">C++</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">
                Programming Language
              </p>
            </div>
          </div>
          <div class="flex flex-1 gap-5 p-2.5 rounded-xl col-span-1 row-span-1 bg-dark-4  hover:bg-dark-1 hover:bg-opacity-50 transition-colors duration-200">
            <div class="p-3 bg-[#245176]/20 rounded-lg w-fit">
              <img
                width="1000"
                height="1000"
                class="size-8 "
                src="/Portfolio-2.0/logos/python-logo.svg"
              />
            </div>
            <div>
              <h4 class="text-lg font-medium">Python</h4>
              <p class="text-dark-200/70 text-mac-1 text-sm">
                Programming Language
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Techstack;
