import { GithubLogo, Link, ArrowLeft } from "@phosphor-icons/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { NeuroButton } from "@/components/ui/neuro-button";
import { type Project } from "@/lib/google-sheets";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const HuggingFaceLogo = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z" />
    <path d="M7 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
    <path d="M14 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0z" />
    <path d="M8 15.5c.5 1.5 2 2.5 4 2.5s3.5-1 4-2.5" />
  </svg>
);

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  // Enhanced mobile design for all projects (same as last project popup)
  const mobileClassName = "w-[90vw] max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl max-h-[80vh] overflow-y-auto px-10 py-12 sm:px-6 sm:py-6 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={mobileClassName}>
        <>
          <DialogHeader>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <project.icon size={32} weight="light" className="text-primary sm:w-8 sm:h-8" />
              </div>
              <div className="min-w-0">
                <DialogTitle className="text-2xl sm:text-3xl font-light tracking-tight font-medium">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-foreground/70 mt-1 text-base sm:text-lg">
                  {project.description}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-4 sm:space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Project Overview</h3>
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
                {project.detailedDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm sm:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="flex gap-3 mt-6 sm:mt-8 sm:gap-4 flex-wrap">
            {project.githubUrl && (
              <NeuroButton
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="flex items-center gap-2 sm:text-base sm:px-6 sm:py-3"
              >
                <GithubLogo size={20} />
                View on GitHub
              </NeuroButton>
            )}

            {project.deployUrl && (
              <NeuroButton
                variant="glow"
                onClick={() => window.open(project.deployUrl, '_blank')}
                className="flex items-center gap-2 sm:text-base sm:px-6 sm:py-3"
              >
                <Link size={20} />
                Live Demo
              </NeuroButton>
            )}

            {project.huggingFaceUrl && (
              <NeuroButton
                variant="outline"
                onClick={() => window.open(project.huggingFaceUrl, '_blank')}
                className="flex items-center gap-2 sm:text-base sm:px-6 sm:py-3"
              >
                <HuggingFaceLogo size={20} />
                Hugging Face
              </NeuroButton>
            )}
          </DialogFooter>


          {/* Mobile back button at bottom */}
          <div className="sm:hidden mt-6 pt-6 border-t border-border/20">
            <button
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-lg py-2"
            >
              <ArrowLeft size={24} weight="bold" />
              Back to Projects
            </button>
          </div>
        </>
      </DialogContent>
    </Dialog>
  );
};
