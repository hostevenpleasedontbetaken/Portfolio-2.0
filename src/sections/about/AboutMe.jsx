import { useRevealOnce } from "../../hooks/useRevealOnce";
import LargeAboutMe from "./LargeAboutMe";
import Section from "../../components/ui/Section";
import SmallAboutMe from "./SmallAboutMe";

const AboutMe = () => {
  const isVisible = useRevealOnce("aboutme");
  return (
    <Section padding="small" id="aboutme" marginTop={"10rem"}>
      <div className="w-full h-full items-center flex justify-center ">
        <div className="md:block hidden">
          <LargeAboutMe isVisible={isVisible} />
        </div>
        <div className="md:hidden block items-center justify-center flex">
          <SmallAboutMe isVisible={isVisible} />
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
