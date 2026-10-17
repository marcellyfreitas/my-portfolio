"use client";

import { useCallback, useRef, useState } from "react";
import type { KeyboardEvent, TouchEvent } from "react";

type Project = {
  name: string;
  description: string;
  problem: string;
  features: string[];
  technologies: string[];
  role: string;
  github: string;
  demo: string | null;
  image: string | null;
  featured?: boolean;
  status?: string;
};

const projects: Project[] = [
  {
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
    image: null,
    featured: true,
    status: "Em produção",
  },
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
  },
];

const SWIPE_THRESHOLD = 50;

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = projects.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta < 0) next();
      else prev();
    }

    touchStartX.current = null;
  };

  return (
    <section id="projetos" className="section-padding bg-section">
      <div className="container-custom mx-auto">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Projetos
        </h2>
        <p className="mb-8 text-muted">
          Projetos que demonstram minha capacidade técnica e de resolução de
          problemas. Cada projeto representa um desafio diferente e uma
          oportunidade de aprendizado.
        </p>

        {/* Carrossel de Projetos */}
        <div
          role="region"
          aria-roledescription="carrossel"
          aria-label="Projetos"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {/* Controles */}
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-xs font-medium text-muted" aria-live="polite">
              Projeto {current + 1} de {total}
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Projeto anterior"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-white active:bg-primary-hover active:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Próximo projeto"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-white active:bg-primary-hover active:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Trilha de slides */}
          <div className="overflow-hidden">
            <div
              className="flex items-stretch transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  inert={index !== current}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} de ${total}: ${project.name}`}
                  className="w-full shrink-0"
                >
                  <article
                    className={`flex h-full flex-col rounded-xl p-6 sm:p-8 ${
                      project.featured
                        ? "border-2 border-primary/20 bg-background"
                        : "border border-border bg-background"
                    }`}
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      {project.featured && (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          Projeto em Destaque
                        </span>
                      )}
                      {project.status && (
                        <span className="text-xs text-muted">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">
                      {project.name}
                    </h3>

                    <p className="mb-6 max-w-3xl leading-relaxed text-muted">
                      {project.description}
                    </p>

                    {project.problem && (
                      <div className="mb-6">
                        <h4 className="mb-2 text-sm font-semibold text-foreground">
                          Problema
                        </h4>
                        <p className="text-sm leading-relaxed text-muted">
                          {project.problem}
                        </p>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="mb-2 text-sm font-semibold text-foreground">
                        Funcionalidades
                      </h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {project.features.map((feature) => (
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
                        {project.role}
                      </p>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-4">
                      <a
                        href={project.github}
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

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover active:bg-primary-hover"
                        >
                          Demonstração
                        </a>
                      )}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Ir para o projeto ${project.name}`}
                aria-current={index === current}
                className={`h-2.5 cursor-pointer rounded-full transition-all ${
                  index === current
                    ? "w-6 bg-primary"
                    : "w-2.5 bg-border hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
