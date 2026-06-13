import { ArrowRight, BookOpenText, BrainCircuit, Bug, Compass, FolderGit2, GitBranch, Lightbulb, Sparkles, TerminalSquare } from "lucide-react"
import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { homeCheatsheets, learningPath } from "@/data/cheatsheets"

const cheatsheetMeta: Record<string, { label: string; Icon: typeof Sparkles; tone: string }> = {
  "IDEs com IA": {
    label: "Ambiente",
    Icon: Sparkles,
    tone: "from-orange-100 to-orange-50",
  },
  "Modelos Open Source": {
    label: "Modelos",
    Icon: Compass,
    tone: "from-teal-100 to-teal-50",
  },
  "CLIs Open Source": {
    label: "Terminal",
    Icon: TerminalSquare,
    tone: "from-lime-100 to-lime-50",
  },
  "Guia GitHub": {
    label: "Colaboração",
    Icon: BookOpenText,
    tone: "from-sky-100 to-sky-50",
  },
  "Comandos Git": {
    label: "Versionamento",
    Icon: GitBranch,
    tone: "from-stone-100 to-stone-50",
  },
  Prompting: {
    label: "Comunicação",
    Icon: BrainCircuit,
    tone: "from-purple-100 to-purple-50",
  },
  Debug: {
    label: "Diagnóstico",
    Icon: Bug,
    tone: "from-red-100 to-red-50",
  },
  Testes: {
    label: "Qualidade",
    Icon: Lightbulb,
    tone: "from-amber-100 to-amber-50",
  },
  Projetos: {
    label: "Planejamento",
    Icon: FolderGit2,
    tone: "from-blue-100 to-blue-50",
  },
}

export function Home() {
  return (
    <div className="home-page flex flex-col gap-10">
      <header className="relative overflow-hidden rounded-[2rem] border bg-card/70 p-6 shadow-[0_24px_80px_rgba(36,74,85,0.12)] backdrop-blur sm:p-10">
        <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 left-1/3 size-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground shadow-sm">
                Campo de estudo
              </Badge>
              <Badge
                variant="secondary"
                className="rounded-full border-0 bg-secondary px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]"
              >
                Português
              </Badge>
            </div>

            <h1 className="max-w-3xl text-4xl font-black tracking-tighter sm:text-6xl">
              Aprenda IA na prática sem perder o rumo no terminal.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Um mapa visual com IDEs, modelos open source, CLIs, Git e GitHub
              para estudantes que querem programar melhor com IA — com comandos
              copiáveis, caminhos recomendados e links oficiais.
            </p>

          </div>

          <div className="relative min-h-[260px] rounded-[1.7rem] border bg-terminal-bg p-5 shadow-2xl shadow-primary/20 lg:min-h-[360px]">
            <div className="absolute inset-x-5 top-5 flex items-center gap-2">
              <span className="size-3 rounded-full bg-orange-400" />
              <span className="size-3 rounded-full bg-lime-300" />
              <span className="size-3 rounded-full bg-sky-300" />
            </div>
            <div className="mt-8 space-y-3 font-mono text-sm text-terminal-fg">
              <p>
                <span className="text-accent">$</span> escolher ferramenta
              </p>
              <p className="pl-4 text-terminal-muted">
                IDE → CLI → modelo → Git → GitHub
              </p>
              <p>
                <span className="text-accent">$</span> copiar comando confiável
              </p>
              <p className="pl-4 text-terminal-muted">
                sem tab perdida, sem tutorial aleatório
              </p>
              <p>
                <span className="text-accent">$</span> praticar fluxo real
              </p>
              <p className="rounded-xl border border-white/10 bg-white/5 p-4 text-terminal-fg">
                AI Guide organiza o caminho.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="flex flex-col gap-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-accent">
              Cheatsheets
            </p>
            <h2 className="text-3xl font-black tracking-tight">
              Guias curtos para usar agora.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
            Cada guia foca em uma decisão concreta: qual ferramenta usar,
            qual comando rodar e onde consultar a fonte oficial.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {homeCheatsheets.map((item) => {
            const meta = cheatsheetMeta[item.title] ?? {
              label: "Guia",
              Icon: item.icon,
              tone: "from-muted to-background",
            }

            return (
              <Card
                key={item.path}
                className="group relative overflow-hidden rounded-[1.35rem] border bg-card/80 p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(36,74,85,0.14)]"
              >
                <div className={`pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gradient-to-br ${meta.tone} opacity-80 blur-sm`} />
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border bg-background shadow-sm">
                      <item.icon className="size-7 text-primary" />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="rounded-full text-[11px] uppercase tracking-[0.18em]">
                          {meta.label}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="leading-6">
                        {item.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="group/btn w-full rounded-full">
                    <Link to={item.path}>
                      Abrir cheatsheet
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <Separator className="my-2" />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="rounded-[2rem] border bg-primary p-6 text-primary-foreground shadow-2xl shadow-primary/20 sm:p-8">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-secondary">
            Comece por aqui
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-black tracking-tight sm:text-4xl">
            Do conceito ao commit: um caminho sem atalhos mágicos.
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-[#d9ead3]">
            A ordem abaixo transforma ferramentas de IA em um fluxo de trabalho
            real: entender o ambiente, escolher modelos, usar o terminal,
            controlar versões e publicar no GitHub.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              9
              <span className="mt-1 block font-normal text-[#d9ead3]">etapas do fluxo</span>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
              PT-BR
              <span className="mt-1 block font-normal text-[#d9ead3]">linguagem direta</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {learningPath.map((step) => (
            <Link
              key={step.step}
              to={step.path}
              className="group rounded-[1.35rem] border bg-card/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-card hover:shadow-[0_18px_48px_rgba(36,74,85,0.1)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border bg-secondary text-sm font-black text-primary shadow-sm">
                  {step.step}
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <step.icon className="size-5 text-accent" />
                    <h3 className="text-lg font-black">{step.title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                <ArrowRight className="mt-1 size-5 shrink-0 text-primary opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
