"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, View } from "lucide-react";
import { Education, Experience, Skills } from "@/lib/types";
import profileImage from "../../../public/arifmiah.png";
import googleDriveWhite from "../../../public/assets/icons8-google-drive.svg";
import googleDriveBlack from "../../../public/assets/icons8-google-drive-black.svg";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

// Define props type
interface AboutContentProps {
  education: Education[];
  experience: Experience[];
  skills: Skills;
}

const AboutContent = ({ education, experience, skills }: AboutContentProps) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleSelectChange = (value: string | number | null | undefined) => {
    if (value === "download") {
      // Start downloading the resume
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (value === "preview") {
      // Open the preview dialog
      setIsPreviewOpen(true);
    } else if (value === "gdrive") {
      // Open Google Drive link in new tab
      window.open(
        "https://drive.google.com/file/d/10Cf5uKo2ewTm6aouCweC_V2M4eFbTjS0/view?usp=sharing",
        "_blank"
      );
    }
  };
  // / Custom button style to ensure consistent height
  const buttonBaseClass =
    "inline-flex items-center justify-center rounded-md px-6 h-10 text-sm font-medium transition-colors";

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Learn more about my background, experience, and skills as a developer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold mb-4">
            Hi, I&apos;m {"<"}Arif Miah{" />"}
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I&apos;m a Full Stack Developer and a first-year Computer Science
              student with a passion for building clean, modern, and responsive
              web applications. I specialize in crafting user-friendly
              interfaces and solving real-world problems with technology.
            </p>
            <p>
              My journey started 4–5 years ago with a fascination for how
              software works, which naturally led me to explore programming.
              Over time, I&apos;ve built a strong foundation in HTML, CSS,
              JavaScript, and grown into technologies like TypeScript, React,
              Next.js, Node.js, and MongoDB.
            </p>
            <p>
              I enjoy learning new tools, experimenting with design, and diving
              deep into both frontend and backend development. Beyond coding, I
              have a deep interest in mathematics, science, and language
              learning — currently exploring Spanish, Arabic, Japanese, and
              Mandarin alongside programming languages like Rust, C++, and Zig.
            </p>
            <p>
              Whether it&apos;s writing blogs, contributing to open-source, or
              just bringing ideas to life — I&apos;m driven by curiosity,
              creativity, and a desire to build things that make an impact.
            </p>
          </div>

          <div className="inline-block">
            <Select onValueChange={handleSelectChange}>
              <SelectTrigger
                className={`w-[180px] ${buttonBaseClass} bg-primary  hover:bg-primary/90`}
                style={{ padding: "0 24px" }}>
                <SelectValue placeholder="My Resume" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Resume</SelectLabel>
                  <SelectItem value="download">
                    <span>
                      <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    </span>
                    Download
                  </SelectItem>
                  <SelectItem value="preview">
                    <View />
                    Preview
                  </SelectItem>
                  <SelectItem value="gdrive">
                    <span className="relative mr-2 h-4 w-4">
                      {/* Light mode icon */}
                      <Image
                        src={googleDriveBlack}
                        alt="Google Drive Icon"
                        className="block dark:hidden absolute h-4 w-4 group-hover:animate-bounce"
                      />
                      {/* Dark mode icon */}
                      <Image
                        src={googleDriveWhite}
                        alt="Google Drive Icon"
                        className="hidden dark:block absolute h-4 w-4 group-hover:animate-bounce"
                      />
                    </span>
                    G. Drive
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
              <DialogContent className="max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Resume Preview</DialogTitle>
                </DialogHeader>
                <div className="h-[70vh] w-full">
                  <iframe
                    src="/resume.pdf"
                    className="h-full w-full rounded-md border border-muted"
                    title="Resume Preview"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <Image
              src={profileImage || "placeholder.png"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-muted">
              <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary" />

              {/* Title & Period */}
              <div className="mb-1 flex items-center flex-wrap gap-2">
                <h3 className="text-xl font-bold">{job.title}</h3>
                <span className="text-xs font-medium text-white bg-primary rounded-full px-2 py-0.5">
                  {job.period}
                </span>
              </div>

              {/* Company */}
              <p className="text-lg text-primary font-medium mb-2">
                {job.company}
              </p>

              {/* Responsibilities */}
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-2">
                {job.responsibilities.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-2">
                {job.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-0.5 bg-muted text-foreground rounded-full border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-6 border-l-2 border-muted">
              <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary" />
              <div className="mb-1 flex items-center">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <span className="text-xs font-medium text-white bg-primary rounded-full px-2 py-0.5 ml-3">
                  {edu.period}
                </span>
              </div>
              <p className="text-lg text-primary font-medium mb-2">
                {edu.institution}
              </p>
              <p className="text-muted-foreground">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>

        <div className="space-y-12">
          {/* Level 1 Skills - Technical */}
          <div>
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                      viewport={{ once: true }}
                      className="h-full bg-primary"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Level 2 Skills - Frameworks & Tools */}
          <div>
            <h3 className="text-xl font-bold mb-6">Frameworks & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.frameworks.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-muted/50 rounded-lg p-4 text-center hover:bg-muted transition-colors">
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;
