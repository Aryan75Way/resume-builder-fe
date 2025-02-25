import { exportPDF } from "@/lib/utils";
import { useAppSelector } from "@/store/store";
import markdownit from "markdown-it";
import { Button } from "../ui/button";

const md = markdownit();
const FirstTemplate = () => {
  const resume = useAppSelector((state) => state.resume);

  if (resume.name)
    return (
      <div className="relative">
        <div
          id="template1"
          className="max-w-4xl mx-auto p-6 bg-white rounded-md text-sm"
        >
          <h1 className="text-2xl font-bold text-center">{resume.name}</h1>
          <p className="text-center">{resume.address}</p>
          {resume.email && (
            <p className="text-center">
              {resume.email} | {resume.contact}
            </p>
          )}
          {resume.linkedin && <p className="text-center">
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {resume?.linkedin}
            </a>{" "}
            |{" "}
            <a
              href={resume.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              {resume?.github}
            </a>
          </p>}

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <article
              className="prose max-w-4xl font-work-sans break-all dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: md.render(resume.education) }}
            />
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Technical Skills</h2>
            <p>
              <strong>Languages:</strong> {resume.languages.join(", ")}
            </p>
            <p>
              <strong>Frameworks & Tools:</strong>{" "}
              {resume.frameworks_tools.join(", ")}
            </p>
            <p>
              <strong>Subjects:</strong> {resume.subjects.join(", ")}
            </p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Experience</h2>
            <article
              className="prose max-w-4xl font-work-sans break-all dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: md.render(resume.experience) }}
            />
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Projects</h2>
            <article
              className="prose max-w-4xl font-work-sans break-all dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: md.render(resume.projects) }}
            />
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold">Achievements</h2>
            <ul className="list-disc ml-5">
              {resume.achievements.map((ach) => (
                <li key={ach}>{ach}</li>
              ))}
            </ul>
          </section>
        </div>
        <Button
          onClick={() => exportPDF("template1")}
          className=" p-2 rounded absolute bottom-2 right-2"
        >
          Download PDF
        </Button>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md h-full flex items-center justify-center text-zinc-700">
      Get started by editing the fields.
    </div>
  );
};

export default FirstTemplate;
