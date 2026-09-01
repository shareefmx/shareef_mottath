import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  grade: string;
  description: string;
  activities?: string;
  skills: string[];
}

const educationList: EducationItem[] = [
  {
    period: "Sep 2020 – Aug 2024",
    degree: "Bachelor of Engineering — BE, Information Science & Engineering",
    institution: "New Horizon College of Engineering, Bengaluru",
    institutionUrl: "https://www.linkedin.com/school/9230770/",
    grade: "CGPA: 8.74 / 10.0",
    description:
      "Graduated with a B.E. in Information Science and Engineering, achieving a CGPA of 8.74. Academic tenure was marked by a strong focus on research, machine learning systems, IoT architectures, and full-stack application development.",
    skills: [
      "Research Skills",
      "Project Management",
      "Machine Learning",
      "Computer Vision",
      "Full-Stack Development",
      "Data Structures & Algorithms",
    ],
  },
  {
    period: "Jun 2018 – Mar 2020",
    degree: "Higher Secondary — Plus Two (Computer Science & Mathematics)",
    institution: "NAM HSS",
    grade: "Grade: 82.4%",
    activities: "Volunteer in NSS (Assistant Team Leader, 2018–2020)",
    description:
      "Completed Higher Secondary education with a primary focus on Computer Science and Mathematics. Established a rigorous foundation in analytical thinking, algorithm design, and mathematical modeling while actively serving as an NSS Assistant Team Leader.",
    skills: ["Computer Science", "Mathematics", "NSS Leadership", "Analytical Thinking", "Problem Solving"],
  },
  {
    period: "Jun 2006 – Mar 2018",
    degree: "Secondary School Leaving Certificate (SSLC) — 10th Standard",
    institution: "NAM HS (Kerala State Board)",
    grade: "Grade: 85.0%",
    description:
      "Successfully completed secondary education under the Kerala State Board with a strong foundation in Mathematics and General Sciences, securing 85% in the final board examinations.",
    skills: ["Mathematics", "General Sciences", "Problem Solving", "Basic Life Support (BLS)"],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32">
      <Reveal delay={0}>
        <div className="mb-12 flex items-baseline gap-4 border-b border-border pb-4">
          <span className="font-mono text-xs text-signal">06</span>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Education
          </h2>
        </div>
      </Reveal>

      <div>
        {educationList.map((item, index) => (
          <Reveal key={item.institution + index} delay={index * 50}>
            <div className="group grid gap-2 border-b border-border py-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </p>
                <p className="mt-1 font-mono text-xs text-signal font-medium">
                  {item.grade}
                </p>
              </div>

              <div className="md:col-span-9">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {item.degree}
                  </h3>
                </div>

                <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  {item.institutionUrl ? (
                    <a
                      href={item.institutionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/inst inline-flex items-center gap-1 hover:text-foreground transition-colors"
                    >
                      <span className="link-underline">{item.institution}</span>
                      <ArrowUpRight className="h-3 w-3 text-signal transition-transform group-hover/inst:translate-x-0.5 group-hover/inst:-translate-y-0.5" />
                    </a>
                  ) : (
                    <span>{item.institution}</span>
                  )}
                </div>

                {item.activities && (
                  <p className="mt-2 font-mono text-xs text-signal/90">
                    Activities & Societies: {item.activities}
                  </p>
                )}

                <p className="mt-2.5 max-w-2xl leading-relaxed text-muted-foreground text-sm">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs text-muted-foreground/70 hover:text-signal transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

