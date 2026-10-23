import { useEffect, useRef } from "react";
import { projects } from "../data";
import { caseStudies } from "../data/caseStudies";
import { useBrowserNavContext } from "../hooks/useBrowserNavContext";
import Tag from "../components/ui/Tag";
import Gallery from "./project/Gallery";
import Phases from "./project/Phases";
import Cards from "./project/Cards";

const Block = ({ title, intro, children }) => (
  <section className="mt-12 md:mt-16">
    <h2 className="mb-2 font-display text-[1.75rem] text-white md:text-[2.25rem]">
      {title}
    </h2>
    {intro && (
      <p className="mb-5 max-w-2xl leading-relaxed text-light-3">{intro}</p>
    )}
    {children}
  </section>
);

const linkClass =
  "rounded-full border border-main-1 px-4 py-1 text-sm text-main-1 transition-colors hover:bg-main-1 hover:text-dark-4";

// A project's "case study" page, filled in from src/data/caseStudies. Every
// block is optional: it only renders if the project has that content.
const ProjectPage = ({ slug }) => {
  const nav = useBrowserNavContext();
  const headingRef = useRef(null);
  const project = projects.find((item) => item.slug === slug);
  const study = caseStudies[slug];

  // Move focus to the new page so screen-reader users hear where they are.
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true });
  }, []);

  if (!project || !study) return null;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto w-full max-w-[900px] px-5 pb-24 pt-8 text-white md:pt-12">
      <button
        type="button"
        onClick={() => nav.goTo("projects")}
        className="mb-6 text-sm text-main-1 underline-offset-4 hover:underline"
      >
        ← All projects
      </button>

      <header>
        <p className="text-sm text-mac-4">{project.meta}</p>
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="mt-1 font-display text-[2.5rem] leading-tight outline-none md:text-[3.5rem]"
        >
          {project.name}
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-light-2">
          {study.tagline}
        </p>

        {project.links?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </ul>

        <dl className="mt-8 grid gap-x-8 gap-y-4 border-y border-dark-1/60 py-6 sm:grid-cols-2">
          {study.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-xs uppercase tracking-wide text-mac-4">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-light-2">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <Block title="Overview">
        <div className="max-w-2xl space-y-4 leading-relaxed text-light-3">
          {study.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Block>

      {study.gallery && (
        <Block title={study.gallery.title} intro={study.gallery.intro}>
          <Gallery items={study.gallery.items} variant={study.gallery.variant} />
        </Block>
      )}

      {study.architecture && (
        <Block title={study.architecture.title} intro={study.architecture.intro}>
          {study.architecture.image && (
            <figure className="mb-6">
              <img
                src={study.architecture.image.src}
                alt={study.architecture.image.alt}
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl bg-white p-3"
              />
              {study.architecture.image.caption && (
                <figcaption className="mt-3 text-sm text-light-3">
                  {study.architecture.image.caption}
                </figcaption>
              )}
            </figure>
          )}
          <Cards items={study.architecture.items} />
        </Block>
      )}

      {study.decisions && (
        <Block title="Design decisions" intro={study.decisionsIntro}>
          <Cards items={study.decisions} />
        </Block>
      )}

      {study.phases && (
        <Block title={study.phases.title} intro={study.phases.intro}>
          <Phases items={study.phases.items} />
        </Block>
      )}

      {study.next && (
        <Block title={study.next.title}>
          <ul className="max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-light-3 marker:text-main-1">
            {study.next.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Block>
      )}

      <nav
        aria-label="More projects"
        className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-dark-1/60 pt-6"
      >
        <button
          type="button"
          onClick={() => nav.goTo("projects")}
          className="text-sm text-main-1 underline-offset-4 hover:underline"
        >
          ← All projects
        </button>
        {next.slug !== slug && (
          <a
            href={`/projects/${next.slug}`}
            onClick={(event) => {
              if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
              event.preventDefault();
              nav.openProject(next.slug);
            }}
            className="text-sm text-main-1 underline-offset-4 hover:underline"
          >
            Next: {next.name} →
          </a>
        )}
      </nav>
    </article>
  );
};

export default ProjectPage;
