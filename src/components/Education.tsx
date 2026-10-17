export default function Education() {
  return (
    <section id="formacao" className="section-padding bg-section">
      <div className="container-custom mx-auto">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Formação
        </h2>
        <p className="mb-12 text-muted">
          Minha formação acadêmica e compromisso com aprendizado contínuo.
        </p>

        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-background p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Análise e Desenvolvimento de Sistemas
                </h3>
                <p className="text-sm text-primary">
                  Tecnólogo · PUC MINAS - Pontifícia Universidade Católica de Minas Gerais
                </p>
              </div>

              <div className="flex flex-col lg:items-end">
                <span className="text-sm text-muted">Formação concluída</span>
                <span className="text-sm text-muted">2024 - 2026</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-background p-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Compliance e Integridade Corporativa
                </h3>
                <p className="text-sm text-primary">
                  Pós-graduação · PUC MINAS - Pontifícia Universidade Católica de Minas Gerais
                </p>
              </div>

              <div className="flex flex-col lg:items-end">
                <span className="text-sm text-muted">Formação concluída</span>
                <span className="text-sm text-muted">2021 - 2022</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-dashed border-border bg-background p-6">
            <h3 className="mb-2 text-lg font-bold text-foreground">
              Cursos e Certificações
            </h3>
            <p className="text-sm text-muted">
              Formação complementar em metodologias ágeis, Scrum, Kanban e controle de
              versão.
            </p>

            <div className="mt-4 space-y-3">
              {[
                "Algoritmos e Lógica de Programação",
                "Git e GitHub",
                "Introdução ao Desenvolvimento Fullstack com a Akad",
                "Conhecendo o React",
                "Introdução ao Scrum",
                "Kanban e Ferramentas Ágeis de Gestão de Projetos",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-border p-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                    +
                  </span>
                  <span className="text-sm text-muted">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
