"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDown } from "lucide-react";

import profileImage from "../../../public/arifmiah.png";
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

export default function Hero() {
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
  const buttonBaseClass = "inline-flex items-center justify-center rounded-md px-6 h-10 text-sm font-medium transition-colors";

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center py-10 md:py-16">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-6">
            MERN Stack Developer
          </span>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
            Hi, I&apos;m <span className="text-primary"> Arif Miah</span>
          </h1>
          <div className="text-xl md:text-2xl h-16 md:h-12 text-muted-foreground mb-6">
            <TypeAnimation
              sequence={[
                "Full Stack MERN Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
                "React Specialist",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="mb-8 max-w-lg text-muted-foreground">
            I build exceptional digital experiences that are fast, accessible,
            and visually appealing. Let&apos;s bring your ideas to life with
            modern web technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* todo: add options for download and online reading and preview  */}
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
                    <SelectItem value="download">Download</SelectItem>
                    <SelectItem value="preview">Preview</SelectItem>
                    <SelectItem value="gdrive">G. Drive</SelectItem>
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
            <a
        href="#projects"
        className={`${buttonBaseClass} border border-muted-foreground/20 bg-background hover:bg-muted/50`}
      >
        View Projects
      </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src={profileImage || "placeholder.png"}
              alt="Arif Miah profile image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex justify-center mt-12 md:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}>
        <button
          onClick={handleScrollDown}
          className="animate-bounce rounded-full p-2 border border-muted-foreground/20 hover:bg-muted/50 transition-colors"
          aria-label="Scroll down">
          <ArrowDown size={24} />
        </button>
      </motion.div>
    </section>
  );
}
