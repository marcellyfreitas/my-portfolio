export default function About() {
  return (
    <section id="sobre" className="section-padding bg-section">
      <div className="container-custom mx-auto">
        <h2 className="mb-12 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Sobre mim
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-muted">
            <p>
              Sou formada em Análise e Desenvolvimento de Sistemas e atuo na
              área de desenvolvimento de software. Minha trajetória profissional
              passou pela área de compliance e auditoria, onde desenvolvi uma
              forte capacidade de análise, atenção a detalhes e
              resolução de problemas.
            </p>
            <p>
              A transição para o desenvolvimento de software foi uma evolução
              natural. A curiosidade por entender como as coisas funcionam e a
              vontade de criar soluções práticas me levaram ao código. Hoje,
              combino a experiência analítica com a capacidade técnica para
              entregar soluções eficientes e de qualidade.
            </p>
            <p>
              Gosto de entender o problema antes de escrever código. Valorizo
              boas práticas, organização e trabalho em equipe. Quando encontro
              algo que ainda não conheço, pesquiso, estudo e encontro a solução.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              O que me define
            </h3>
            <ul className="space-y-3">
              {[
                "Abertura para novos desafios e tecnologias",

                "Aprendizado rápido e contínuo",

                "Comunicação clara e trabalho em equipe",

                "Dedicação e comprometimento com cada projeto",

                "Foco em qualidade e boas práticas de desenvolvimento",

                "Organização e cumprimento de prazos",

                "Pensamento analítico e resolução de problemas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
