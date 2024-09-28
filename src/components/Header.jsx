import React from "react";
import Theme from "./Theme";

const Header = () => {
  return (
    <div className="z-10 w-screen">
      <div className="px-2 pt-2 pb-1 m-auto sm:pb-2 max-w-13x1">
        <nav className="flex items-center justify-between mx-1 sm:mx-2 md:mx-3 lg:mx-4">
          <div className="flex items-center gap-2 px-3 py-2 border rounded-3xl">
            <Theme />
            <div className="flex">
              <div className="flex items-center lg:border rounded-3xl lg:p-3">
                <ul className="hidden gap-5 text-base lg:flex lg:items-center ">
                  <li>
                    <a class="flex items-center gap-1 transition-all " href="/">
                      <svg
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 1-1 1 1 0 0 0-.29-.71zM6 20v-9.59l6-6 6 6V20z"></path>
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      class="flex items-center gap-1 transition-all hover:text-accentb"
                      href="/Projects"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
                      </svg>
                      My Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="h-1 border-b"></div>
    </div>
  );
};

export default Header;
