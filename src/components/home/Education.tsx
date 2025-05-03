import { GraduationCap } from "lucide-react";
import RevealText from "../animations/RevealText";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export const educationData: EducationItem[] = [
  {
    degree: "Programming Hero Level 2 Web Development",
    institution: "Coding Academy",
    duration: "24 October 2024 - 25 April 2025",
    description: "A comprehensive 6-month program designed to elevate web development skills to an advanced level. The course delves into modern technologies including TypeScript, Express.js, MongoDB, Mongoose, Redux, Next.js, SQL, PostgreSQL, Prisma, Docker, AWS, GraphQL, Vitest, and Jest. This program is tailored for developers aiming to master cutting-edge web technologies and advance their careers in the tech industry."
  },
  {
    degree: "Programming Hero Level 1 Web Development",
    institution: "Coding Academy",
    duration: "24 December 2023 - 24 June 2024",
    description:
      "Intensive 6 month program covering modern JavaScript frameworks, responsive design principles, and backend development with Node.js. MongoDb",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-10 md:py-16">
      <div className="container mx-auto">
        <div className="mb-8 flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold md:text-3xl">Education</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {educationData.map((item, index) => (
          <div key={index}>
            <EducationContents item={item} index={index} />
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export const EducationContents = ({
  index,
  item,
}: {
  index: number;
  item: EducationItem;
}) => {
  return (
    <div>
      <RevealText delay={index * 0.1}>
        <div className="rounded-lg border border-muted-foreground/20 bg-muted/20 p-6 transition-all hover:border-primary/20 hover:bg-muted/30">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <span className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
              {item.duration}
            </span>
          </div>
          <p className="mb-4 text-primary">{item.institution}</p>
          <p className="text-muted-foreground">{item.description}</p>
        </div>
      </RevealText>
    </div>
  );
};
