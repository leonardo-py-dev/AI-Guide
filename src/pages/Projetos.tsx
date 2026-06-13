import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheatsheetPage } from "@/components/cheatsheet/CheatsheetPage"
import { projectIdeas, projectSteps } from "@/data/cheatsheets"

const difficultyColors: Record<string, string> = {
  Iniciante: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Intermediário: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
}

export function Projetos() {
  return (
    <CheatsheetPage
      title="Projetos Práticos com IA"
      description="Transforme uma ideia em um projeto funcional usando a IA como assistente de planejamento, implementação e revisão."
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {projectSteps.map((step) => (
            <Card key={step.title}>
              <CardHeader>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              {step.tips && step.tips.length > 0 ? (
                <CardContent>
                  <ul className="flex flex-col gap-2">
                    {step.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm">
                        <Badge variant="outline" className="mt-0.5 shrink-0">
                          Dica
                        </Badge>
                        <span className="text-muted-foreground">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Ideias de projetos</h2>
          <p className="text-sm text-muted-foreground">
            Comece com um projeto pequeno e vá evoluindo. O importante é entregar uma versão funcional.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {projectIdeas.map((idea) => (
              <Card key={idea.name}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{idea.name}</CardTitle>
                    <Badge className={difficultyColors[idea.difficulty] ?? ""}>
                      {idea.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{idea.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </CheatsheetPage>
  )
}
