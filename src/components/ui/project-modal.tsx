import { ArrowUpRight, Github, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { type Project } from "@/lib/google-sheets";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg border border-border bg-background p-6 sm:p-8 text-foreground shadow-2xl">
        <DialogHeader className="border-b border-border pb-4">
          <div className="flex items-baseline justify-between gap-4 pr-6">
            <div>
              <DialogTitle className="text-2xl font-medium tracking-tight">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-1 text-sm">
                {project.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 pt-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-signal mb-2">
              // Overview
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
              {project.detailedDescription || project.description}
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-signal mb-2">
              // Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
            {project.deployUrl && (
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-xs font-mono uppercase tracking-wider text-background transition-opacity hover:opacity-90"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-mono uppercase tracking-wider text-foreground hover:bg-muted/50 transition-colors"
              >
                <Github className="h-3.5 w-3.5" />
                <span>Source Code</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-signal" />
              </a>
            )}

            {project.huggingFaceUrl && (
              <a
                href={project.huggingFaceUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-mono uppercase tracking-wider text-foreground hover:bg-muted/50 transition-colors"
              >
                <span>Hugging Face</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-signal" />
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
