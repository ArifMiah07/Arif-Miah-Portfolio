import { GraduationCap } from "lucide-react";
import RevealText from "../animations/RevealText";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University Name",
    duration: "2020 - 2022",
    description:
      "Specialized in artificial intelligence and machine learning. Graduated with distinction and completed a thesis on optimization algorithms for deep learning models.",
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University Name",
    duration: "2016 - 2020",
    description:
      "Focused on web development and software architecture. Completed various projects including a full-stack e-commerce platform and a real-time chat application.",
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Coding Academy",
    duration: "Summer 2019",
    description:
      "Intensive 12-week program covering modern JavaScript frameworks, responsive design principles, and backend development with Node.js.",
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
