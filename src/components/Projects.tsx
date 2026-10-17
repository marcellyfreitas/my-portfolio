const projects = [
  {
    name: "MediConnect",
    description:
      "Sistema para agendamento de consultas médicas, composto por uma API REST e um aplicativo mobile para pacientes e administradores.",
    problem:
      "Facilitar o gerenciamento de consultas médicas e centralizar informações relacionadas a pacientes, médicos, unidades, convênios e agendamentos.",
    features: [
      "Cadastro e login com autenticação JWT",
      "Agendamento e histórico de consultas",
      "Gerenciamento de médicos e unidades",
      "Gerenciamento de usuários e dados administrativos",
      "Aplicativo mobile integrado à API",
    ],
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "React Native",
      "Expo",
      "TypeScript",
      "SQL",
    ],
    role:
      "Desenvolvimento da API e do aplicativo mobile, trabalhando na implementação das funcionalidades, autenticação, integração com a API e organização da aplicação.",
    github: "https://github.com/marcellyfreitas/mediconnect-mono",
    demo: null,
    image: null,
    featured: false,
  },
  {
    name: "OfficeRoomie",
    description:
      "Sistema web de gerenciamento de reservas de salas corporativas, com áreas para clientes e administradores.",
    problem:
      "Facilitar a consulta e reserva de salas corporativas, além de centralizar o gerenciamento de salas, clientes, reservas e dados administrativos.",
    features: [
      "Catálogo de salas com busca e paginação",
      "Reserva de salas com geração de protocolo",
      "Consulta e cancelamento de reservas",
      "Dashboard administrativo com CRUD",
      "Autenticação e controle de acesso",
    ],
    technologies: [
      "ASP.NET Core",
      "Entity Framework Core",
      "Razor Pages",
      "MySQL",
      "Docker",
    ],
    role:
      "Desenvolvimento da aplicação, incluindo implementação de funcionalidades, regras de negócio, autenticação, persistência de dados e configuração do ambiente com Docker.",
    github: "https://github.com/marcellyfreitas/officeroomie",
    demo: null,
    image: null,
    featured: false,
  },
];

const featuredProject = {
  name: "Sistema de Gestão de Cursos",
  description:
    "Sistema desenvolvido para um cliente real durante aproximadamente seis meses, com foco no gerenciamento de cursos, turmas, alunos e desempenho acadêmico.",
  problem:
    "Centralizar a gestão acadêmica e facilitar o acompanhamento de cursos, aulas, avaliações, matrículas, frequência e desempenho dos alunos.",
  features: [
    "Gestão de cursos e pré-requisitos",
    "Gerenciamento de turmas, aulas e avaliações",
    "Matrículas e controle de frequência",
    "Cálculo de aprovação dos alunos",
    "Autenticação e controle de acesso por perfil",
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "ASP.NET Core",
    "Entity Framework Core",
    "MySQL",
  ],
  role:
    "Participei de diferentes etapas do projeto, desde o levantamento de requisitos e entendimento das necessidades do cliente até o desenvolvimento, implementação e evolução do sistema, trabalhando em equipe.",
  github: "https://github.com/marcellyfreitas/gestao-cursos-mono",
  demo: null,
};

export default function Projects() {
  return (
    <section id="projetos" className="section-padding bg-section">
      <div className="container-custom mx-auto">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Projetos
        </h2>
        <p className="mb-12 text-muted">
          Projetos que demonstram minha capacidade técnica e de resolução de
          problemas. Cada projeto representa um desafio diferente e uma
          oportunidade de aprendizado.
        </p>

        {/* Projeto em Destaque */}
        <div className="mb-16 overflow-hidden rounded-xl border-2 border-primary/20 bg-background p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Projeto em Destaque
            </span>
            <span className="text-xs text-muted">Em produção</span>
          </div>

          <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
            {featuredProject.name}
          </h3>

          <p className="mb-6 max-w-3xl leading-relaxed text-muted">
            {featuredProject.description}
          </p>

          {featuredProject.problem && (
            <div className="mb-6">
              <h4 className="mb-2 text-sm font-semibold text-foreground">
                Problema
              </h4>
              <p className="text-sm leading-relaxed text-muted">
                {featuredProject.problem}
              </p>
            </div>
          )}

          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold text-foreground">
              Funcionalidades
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {featuredProject.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold text-foreground">
              Minha Participação
            </h4>
            <p className="text-sm leading-relaxed text-muted">
              {featuredProject.role}
            </p>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {featuredProject.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={featuredProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-white active:bg-primary-hover active:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              Código
            </a>
            {featuredProject.demo && (
              <a
                href={featuredProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover active:bg-primary-hover"
              >
                Demonstração
              </a>
            )}
          </div>
        </div>

        {/* Outros Projetos */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-lg active:border-primary/40"
            >
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {project.name}
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              {project.problem && (
                <div className="mb-4">
                  <h4 className="mb-1 text-xs font-semibold text-foreground">
                    Problema
                  </h4>
                  <p className="text-xs leading-relaxed text-muted">
                    {project.problem}
                  </p>
                </div>
              )}

              <div className="mb-4">
                <h4 className="mb-1 text-xs font-semibold text-foreground">
                  Funcionalidades
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-muted"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="mb-1 text-xs font-semibold text-foreground">
                  Minha Participação
                </h4>
                <p className="text-xs leading-relaxed text-muted">
                  {project.role}
                </p>
              </div>

              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary hover:text-white active:bg-primary-hover active:text-white"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Código
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-hover active:bg-primary-hover"
                  >
                    Demonstração
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
