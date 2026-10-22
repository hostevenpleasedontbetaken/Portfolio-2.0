import { useState } from "react";
import { education, work } from "../../data";
import headshot from "../../assets/images/headshot.jpg";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import Timeline from "./Timeline";

const tabs = [
  {
    label: "Work",
    items: work.map((job) => ({ ...job, detail: job.role })),
  },
  {
    label: "Education",
    items: education.map((school) => ({ ...school, detail: school.degree })),
  },
];

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="about">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <h2 className="mb-4 text-[2rem] text-white md:text-[3rem]">About</h2>
        </Reveal>

        {/* Profile sits above the timeline on phones, beside it on large screens. */}
        <div className="flex flex-col-reverse gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <Reveal className="w-full max-w-[40rem] space-y-4">
            <div className="rounded-lg bg-dark-4 p-1">
              <div className="grid grid-cols-2 gap-x-2 text-light-3">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    type="button"
                    aria-pressed={activeTab === index}
                    onClick={() => setActiveTab(index)}
                    className={`h-7 rounded-lg ${
                      activeTab === index ? "bg-dark-1" : "bg-dark-4"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <Timeline items={tabs[activeTab].items} />
          </Reveal>

          <Reveal className="flex flex-col items-center space-y-5 lg:mt-4 lg:w-[20rem] lg:shrink-0">
            <div className="h-[18rem] w-[14rem] overflow-hidden rounded-3xl border lg:h-[25rem] lg:w-[20rem]">
              <img
                src={headshot}
                alt="Steven Ho"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <p className="text-center text-light-3">
              Hi, I&apos;m <span className="text-main-1">Steven Ho.</span> I
              design user-friendly, visually engaging, and performance-driven
              web applications. My focus is on delivering seamless digital
              experiences that combine creative design with technical innovation
              to meet and exceed user expectations.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
