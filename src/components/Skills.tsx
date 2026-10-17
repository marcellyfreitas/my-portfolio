import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSharp,
  SiDotnet,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit,
  SiGithub,
  SiDocker,
  SiJira,
} from "react-icons/si";

const skillIcons = {
  html: SiHtml5,
  css: SiCss,
  javascript: SiJavascript,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  tailwind: SiTailwindcss,
  csharp: SiSharp,
  dotnet: SiDotnet,
  php: SiPhp,
  laravel: SiLaravel,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  jira: SiJira,
};

const skillCategories = [
  {
    title: "Fron-tend",
    skills: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "C#", icon: "csharp" },
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
    ],
  },
  {
    title: "Banco de Dados",
    skills: [{ name: "MySQL", icon: "mysql" }],
  },
  {
    title: "Ferramentas",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "Jira", icon: "jira" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="habilidades" className="section-padding">
      <div className="container-custom mx-auto">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Habilidades
        </h2>

        <p className="mb-12 text-muted">
          Tecnologias e ferramentas que utilizo para desenvolver soluções
          completas e de qualidade.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill) => {
                  const Icon =
                    skillIcons[skill.icon as keyof typeof skillIcons];

                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>

                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}