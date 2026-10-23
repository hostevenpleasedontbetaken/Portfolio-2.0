import { links, profile } from "../../data";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { MailIcon, PathIcon } from "../../components/ui/icons";

const buttonClass =
  "inline-flex items-center gap-x-2 rounded-full border border-main-1 px-5 py-2 text-sm font-medium text-main-1 transition-colors hover:bg-main-1/10";

const Contact = () => (
  <Section id="contact" className="pb-24 md:min-h-[60vh]">
    <div className="mx-auto w-full max-w-[1200px] space-y-6 text-white">
      <Reveal>
        <h2 className="font-display text-[2rem] md:text-[3rem]">Contact</h2>
      </Reveal>
      <Reveal>
        <p className="max-w-xl text-light-3">
          Want to talk about a role, a project, or React and TypeScript? Here is
          where to find me.
        </p>
      </Reveal>

      <Reveal from="up">
        <div className="flex flex-wrap gap-3">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-x-2 rounded-full bg-main-1 px-5 py-2 text-sm font-medium text-dark-4 transition-colors hover:bg-white"
            >
              <MailIcon size={18} />
              Email me
            </a>
          )}
          {links.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target={item.target}
              rel="noopener noreferrer"
              className={buttonClass}
            >
              <PathIcon paths={[item.path]} size={18} />
              {item.title}
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </Section>
);

export default Contact;
