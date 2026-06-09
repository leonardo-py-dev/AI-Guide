import { ArrowRight } from "lucide-react"
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

export function Home() {
  return (
    <div className="flex flex-col gap-10">
      <header className="flex flex-col gap-4">
        <Badge variant="secondary" className="w-fit">
          Material de estudo
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight">
          AI Guide — Cheatsheets para Estudantes
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Referência prática sobre programação com IA: IDEs, modelos open
          source, CLIs, Git e GitHub. Tudo em português, com comandos
          copiáveis e links oficiais.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Cheatsheets</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {homeCheatsheets.map((item) => (
            <Card key={item.path} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild>
                  <Link to={item.path}>
                    Ver cheatsheet
                    <ArrowRight />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Comece por aqui</h2>
        <p className="text-muted-foreground">
          Fluxo recomendado para estudantes que estão começando com
          programação assistida por IA:
        </p>
        <div className="flex flex-col gap-3">
          {learningPath.map((step) => (
            <Link
              key={step.step}
              to={step.path}
              className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {step.step}
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-center gap-2">
                  <step.icon className="size-4 text-muted-foreground" />
                  <h3 className="font-medium">{step.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
