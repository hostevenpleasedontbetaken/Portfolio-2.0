import { useRevealOnce } from "../../hooks/useRevealOnce";
import Section from "../../components/ui/Section";
import LargeTechStack from "./LargeTechStack";
import SmallTechStack from "./SmallTechStack";

const TechStack = () => {
  const isVisible = useRevealOnce("techstack");

  return (
    <Section padding="small" id="techstack" marginTop={"10rem"}>
      <div className="flex-col flex justify-center items-center w-full  px-5 mt-[-10rem] md:mt-0 text-white space-y-4 ">
        <div className="lg:w-[829.59px] xl:w-[1200px]">
          <div
            className={`flex justify-start transition-all duration-1000 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-[-5rem] opacity-0"
            }`}
          >
            <p className={`lg:text-[3rem] md:text-[2.5rem] text-[2rem]`}>
              Current Technologies
            </p>
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
        </div>
        <div
          className={` hidden md:block transition-transform duration-1000 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[10rem] opacity-0"
          }`}
        >
          <LargeTechStack />
        </div>

        <div
          className={`block md:hidden transition-transform duration-1000 ease-in-out ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[10rem] opacity-0"
          }`}
        >
          <SmallTechStack />
        </div>
      </div>
    </Section>
  );
};

export default TechStack;
