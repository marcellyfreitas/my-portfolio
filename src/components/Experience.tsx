const experiences = [
  {
    title: "Desenvolvedora de Software Freelancer",
    company: "Igreja Batista Catedral da Adoração",
    period: "2026",
    description:
      "Desenvolvimento de sistema web de gestão de cursos para um cliente real, participando de todas as etapas do projeto, desde o levantamento de requisitos e definição das funcionalidades até a implementação, validação e evolução da solução.",
    highlights: [
      "Levantamento e refinamento de requisitos junto ao cliente, transformando necessidades de negócio em funcionalidades",
      "Análise e documentação de requisitos, regras de negócio e fluxos da aplicação",
      "Desenvolvimento de sistema web utilizando ASP.NET Core, Next.js, TypeScript, HTML, CSS e Tailwind CSS",
      "Implementação da integração da aplicação com banco de dados MySQL",
      "Realização de testes, validação de funcionalidades e correção de inconsistências",
      "Comunicação direta com o cliente durante alinhamentos, validações e evolução da solução",
    ],
  },
  {
    title: "Analista de Compliance / Auditoria",
    company: "Demarco & Co",
    period: "2021-2026",
    description:
      "Atuação na análise e auditoria de documentos trabalhistas e previdenciários, com foco em conformidade, identificação de riscos e inconsistências, qualidade das informações e cumprimento de prazos.",
    highlights: [
      "Análise detalhada de documentação com foco em Compliance e conformidade",
      "Aplicação de princípios e requisitos relacionados à LGPD",
      "Identificação de inconsistências, riscos e não conformidades",
      "Resolução de problemas e suporte a clientes corporativos",
      "Elaboração de relatórios técnicos baseados em dados e evidências",
      "Organização e gestão de demandas, prazos e prioridades",
      "Identificação de padrões e oportunidades de melhoria",
      "Trabalho orientado à qualidade, processos e resultados",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding">
      <div className="container-custom mx-auto">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Experiência Profissional
        </h2>
        <p className="mb-12 text-muted">
          Minha trajetória profissional, mostrando a evolução de carreira e as
          competências desenvolvidas ao longo do tempo.
        </p>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-primary">{exp.company}</p>
                </div>
                <span className="text-sm text-muted">{exp.period}</span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-muted">
                {exp.description}
              </p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
